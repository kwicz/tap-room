import React from "react";
import KegDetails from "./KegDetails";
import KegList from "./KegList";
import NewKegForm from "./NewKegForm";
import EditKegForm from "./EditKegForm";
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';


class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [
        {
          name: "Banana Beer",
          brand: "Solovewicz Brewing",
          description: "Fruity, but in a dog kind of way.",
          alcoholContent: "4%",
          price: 5,
          remainingPints: 124
        },
        {
          name: "Sneaky Sasquatch",
          brand: "Bigfoot Beer",
          description: "Pungent and hoppy.",
          alcoholContent: "8%",
          price: 11,
          remainingPints: 124
        },
        {
          name: "Baby Beer",
          brand: "Cute Kid Company",
          description: "Watery and sweet.",
          alcoholContent: "0%",
          price: 3,
          remainingPints: 124
        }
      ],
      selectedKeg: null,
      editing: false
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList});
    this.setState({formVisibleOnPage: false});
  }

  handleEditClick = () => {
    console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(keg => keg.id !== this.state.selectedKeg.id)
      .concat(kegToEdit);
    this.setState({
        masterKegList: editedMasterKegList,
        editing: false,
        selectedKeg: null
      });
  }

  handleOrderingPint = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    const updatedPints = selectedKeg.remainingPints - 1;
    const updatedKeg = {...selectedKeg, remainingPints: updatedPints};
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg],
      selectedKeg: updatedKeg
    });
  }

  handleQuickOrder = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    const updatedPints = selectedKeg.remainingPints - 1;
    const updatedKeg = {...selectedKeg, remainingPints: updatedPints};
    const kegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({
      masterKegList: [...kegList, updatedKeg],
      selectedKeg: null
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id ===id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(keg => keg.id !== id);
    this.setState({masterKegList: newMasterKegList});
    this.setState({selectedKeg: null});
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  render() {
    const styledButton = {
      maxWidth: 345,
      marginLeft: "auto",
      marginRight: "auto",
      marginTop:100,
      borderRadius:4,
      width:150,
        /* Basic styling and alignment */
      /* For Neumorphism Effect */
      backgroundColor: "#E0E5EC",
      boxShadow: "9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)"
    }
    let currentlyVisibleState = null;
    let buttonText = null;
    let buttonIcon = null;

    if (this.state.editing ) {      
      currentlyVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditKeg = {this.handleEditingKegInList} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg = {this.state.selectedKeg} 
      onClickingOrder = {this.handleOrderingPint}
      onClickingDelete = {this.handleDeletingKeg}
      onClickingEdit = {this.handleEditClick} />
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
      buttonIcon = <ArrowBackIos />;
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.masterKegList}
      onClickingOrder= {this.handleQuickOrder}
      onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add A Keg";
      buttonIcon = <Add />;
    }
    return (
      <React.Fragment>
        <Button onClick={this.handleClick} style={styledButton}>
          {buttonIcon}
          {buttonText}
        </Button>
        {currentlyVisibleState}
      </React.Fragment>
    );
  }
}



export default KegControl;