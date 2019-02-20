import * as React from "react";
import { observer, inject } from "mobx-react";
import { IRootStore } from "src/store/interfeces";
import { MODALS_ID } from "src/interfaces/store";
import CreateChat from "./create-chat";
import AddUserPopup from "./add-user";
import ModalClose from "./components/modal-close";
import Cache from "./cache";
require("./styles.scss");

interface IModalsProps {
  store?: IRootStore;
}

@inject("store")
@observer
export default class Modals extends React.Component<IModalsProps> {
  constructor(props) {
    super(props);
  }
  public render() {
    if (this.props.store.appStore.modal === MODALS_ID.NULL) {
      return(
        <div/>
      );
    }
    let content: JSX.Element = <div/>;
    switch (this.props.store.appStore.modal) {
      case MODALS_ID.CREATE_CHAT:
        content = <CreateChat/>;
        break;
      case MODALS_ID.ADD_USERS:
        content = <AddUserPopup/>;
        break;
      case MODALS_ID.CACHE:
        content = <Cache/>;
        break;
    }

    return(
      <div className="modal-wrapper">
        <div className="modal">
          <ModalClose/>
          {content}
        </div>
      </div>
    );
  }
}
