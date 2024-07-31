import PrimaryScreen from "../view/PrimaryScreen";
import DoctorController from "./DoctorController";

export default class BasicController{

    private primaryScreen: PrimaryScreen = new PrimaryScreen(new DoctorController);
    
    public startSystem():void {
       this.primaryScreen.getFirstScreen();
    }

}