import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RequestForConsultComponent } from './requestForConsult/requestForConsult.component';
import { ConsultTermComponent } from './consultTerm/consultTerm.component';
import { ClinicalCenterAdministratorCompoment } from './clinicalCenterAdmin/clinicalCenterAdmin.component';
import { arrivedRequest } from './arrivedRequest/arrivedRequest.component';
import { AddNewClinic } from './addNewClinic/addNewClinic.component';
import { RegisterNewClinicalCenterAdministrator } from './registerNewClinCenAdmin/registerNewClinCenAdmin.component';
import { createMedicamentCodeBook } from './createMedicamentCodeBook/createMedicamentCodeBook.component';
import { createDiagnosisCodeBook } from './createDiagCodeBook/createDiagCodeBook.component';
import { WelcomeComponent } from './home/welcome.component'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DoctorComponent } from './doctorHomePage/doctor.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClinicAdminHomePageComponent } from './clinicAdminHomePage/clinicAdminHomePage.component';
import { AddDoctorComponent } from './doctor/addDoctor.component';
import { DeleteDoctorComponent } from './doctor/deleteDoctor.component';
import { NurseComponent } from './nurseHomePage/nurse.component';
import { RecipeValidation } from './recipeValidation/recipeVal.component';
import { RequestForAbsence } from './requestForAbsence/requestForAbsence';
import { UserProfiles } from './UserProfiles/userProfiles.component';
import { nurseWorkCal } from './nurseWorkingCalendar/nurseWorkCal.component';
import { listOfAllPat } from './ListOfAllPatients/listOfAllPat.component';
import { AddRoomComponent } from './rooms/addRoom.component';
import { DeleteRoomComponent } from './rooms/deleteRoom.component';
import { PatientComponent } from './patientHomePage/patient.component';
import { ListOfClinics } from './listOfClinics/listOfClinics.component';
import { DeleteClinicsComponent } from './addNewClinic/deleteClinics.component';
import { ListOfPatClinics } from './patientHomePage/listOfClinicsPat.component';
import { PatientProfileSettingsComponent } from './patientProfileSettings/patientProfileSettings.component';
import { MaterialModule } from './material';
import { ListOfMedicament } from './listOfMedicaments/listOfMedicament.component';
import { DeleteMedicamentComponent } from './createMedicamentCodeBook/deleteMedicament.component';
import { ConsultTypeComponent } from './consultType/consultType.component';
import { DeleteConsultTypeComponent } from './consultType/deleteConsultType.component';
import { AddClinicAdminComponent } from './addNewClinicAdministrator/addNewClinicAdministrator.component';
import { DeleteDiagnosisComponent } from './createDiagCodeBook/deleteDiagnosis.component';
import { RequestExamination } from './patientRequestExamination/requestExamination.component';
import { MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { addNewClinicCenterAdmin } from './addNewClinicCenterAdmin/addNewClinicCenterAdmin.component';
// import { ListOfDiagnosis } from './listOfAllDiagnosis/listOfAllDiagnosis.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    RequestForConsultComponent,
    ConsultTermComponent,
    ClinicalCenterAdministratorCompoment,
    arrivedRequest,
    AddNewClinic,
    RegisterNewClinicalCenterAdministrator,
    createMedicamentCodeBook,
    createDiagnosisCodeBook,
    WelcomeComponent,
    DoctorComponent,
    ClinicAdminHomePageComponent,
    AddDoctorComponent,
    DeleteDoctorComponent,
    NurseComponent,
    listOfAllPat,
    UserProfiles,
    nurseWorkCal,
    RequestForAbsence,    
    RecipeValidation,
    AddRoomComponent,
    DeleteRoomComponent,
    PatientComponent,
    ListOfClinics,
    DeleteClinicsComponent,
    ListOfPatClinics,
    PatientProfileSettingsComponent,
    ListOfMedicament,
    DeleteMedicamentComponent,
    ConsultTypeComponent,
    DeleteConsultTypeComponent,
    AddClinicAdminComponent,
    DeleteDiagnosisComponent,
    RequestExamination,
    addNewClinicCenterAdmin
    //ListOfDiagnosis
    ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {path: 'registration', component: RegistrationComponent},
      {path: 'login', component: LoginComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: 'HomepageCCA', component: ClinicalCenterAdministratorCompoment},
      {path: 'HomepageCA' , component: ClinicAdminHomePageComponent},
      {path: 'HomepageDoctor', component: DoctorComponent},
      {path: 'HomepageNurse', component: NurseComponent},
      {path: 'HomepageNurse/listOfAllPat', component: listOfAllPat},
      {path: 'HomepageNurse/UserProfiles', component: UserProfiles},
      {path: 'HomepageNurse/nurseWorkCal', component: nurseWorkCal},
      {path: 'HomepageNurse/RequestForAbsence', component: RequestForAbsence},
      {path: 'HomepageNurse/RecipeValidation', component:RecipeValidation},
      {path: 'HomepageCCA/arrivedReq', component : arrivedRequest},
      {path: 'HomepageCCA/addNewClinicCenterAdmin', component: addNewClinicCenterAdmin},
      {path: 'HomepageCCA/registerNewClinAdmin', component: AddClinicAdminComponent},
      {path: 'HomepageCCA/addNewClinic', component: AddNewClinic},
      {path: 'HomepageCCA/ListOfClinics', component: ListOfClinics},
      {path: 'HomepageCCA/createMedCod', component: createMedicamentCodeBook},
      {path: 'HomepageCCA/createDiagCod', component: createDiagnosisCodeBook}, 
      {path: 'HomepageCA/addDoctor', component: AddDoctorComponent},
      {path: 'HomepageCA/allDoctors', component:DeleteDoctorComponent},
      {path: 'HomepageCA/addRoom', component: AddRoomComponent},
      {path: 'HomepageCA/allRooms', component: DeleteRoomComponent},
      {path: 'HomepageCA/addConsultType', component: ConsultTypeComponent},
      {path: 'HomepageCA/ConsultTypes', component: DeleteConsultTypeComponent},
      {path: 'HomepageCA/consultTerm', component: ConsultTermComponent},
      {path: 'HomepageCCA/allClinics', component: DeleteClinicsComponent}, 
      {path: 'HomepageCCA/allMedicaments', component: DeleteMedicamentComponent},
      {path: 'HomepageCCA/allDiagnosis', component: DeleteDiagnosisComponent},
      {path: 'HomepagePatient', component:PatientComponent},
      {path: 'HomepagePatient/listOfClinics', component:ListOfClinics},
      {path: 'HomepagePatient/ListOfPatClinics', component: ListOfPatClinics},
      {path: 'HomepagePatient/PatientProfileSettings', component: PatientProfileSettingsComponent},
      {path: 'HomepagePatient/requestExamination', component: RequestExamination},
      {path: 'requestConsult', component: RequestForConsultComponent},
      {path: '', component: WelcomeComponent, pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full'},
    ], {useHash: true}),
    BrowserAnimationsModule
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }

