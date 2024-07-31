import promptSync from "prompt-sync";
import Doctor from "../model/Doctor";
import DoctorController from "../control/DoctorController";


export default class PrimaryScreen{

  


  constructor(private doctorController: DoctorController){
  
  }
    private prompt = promptSync();

    public getFirstScreen():void {
        
       
          let showScreen: boolean = false;
          while (!showScreen) {
              // Get user input
              //console.clear();
              let choice = this.prompt("Escolha:\n1 - Cadastro de Médicos\n2 - Listar\n3 - Sair\n");
              
              switch (choice) {
                case "1":
                let doctor: Doctor = this.doctorController.getNewDoctor()
                this.registerDoctor(doctor)
                break;
        
                case "2":
                  this.doctorController.listAllDoctors()
                  break;
                case "3":
                    showScreen = true;
                  break;
                default:
                  //console.clear();
                  console.log("Invalid answer!");
              }
            }
      

    }

    public registerDoctor(doctor: Doctor): void{
      let name = this.prompt("Digite o nome do medico: ");
      doctor.setName(name);
      let specialization = this.prompt("Digite a especialização do medico: ");
      doctor.setSpecialization(specialization);

      this.doctorController.registerNewDoctor(doctor);
      this.doctorController.listAllDoctors()
    }
    
}