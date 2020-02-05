import { Component, OnInit } from '@angular/core';
import { listOfClinicsPatService } from './listOfClinicsPat.service';
import { listOfClinicsPat } from './listOfClinicsPat';
import { DeleteConsultTypeService } from '../consultType/deleteConsultType.service';
import { ConsultType } from '../consultType/consultType';
import { ConsultTerm } from '../consultTerm/consultTerm';
import { ConsultTermService } from '../consultTerm/consultTerm.service';
import * as moment from 'moment';
import {Sort} from '@angular/material/sort';
import { DeleteDoctorService } from '../doctor/deleteDoctor.service';
import { Clinic } from '../addNewClinic/clinic';
import { Doctor } from '../doctor/doctor';
import { appointedExamination } from './appointedExamination';
import { AppointedExaminationsService } from './patientExaminations.service';
import { UserService } from '../registration/user.service';
import { User } from '../registration/user';

@Component({
    selector: 'pat-listOfClinics',
    templateUrl: './listOfClinicsPat.component.html',
    styleUrls: ['./listOfClinicsPat.component.css']
})

export class ListOfPatClinics implements OnInit{

    public listClin : listOfClinicsPat[];
    public pListClin: listOfClinicsPat[] = [];
    public types: ConsultType[];
    public _clinicAddress: string;
    public _doctorName: string;
    public _doctorSurname: string;
    public _doctorGrade: any;
    public filteredClinics: listOfClinicsPat[];
    public selectedType: ConsultType;
    public filteredDoctors: Doctor[];
    public _clinicRating: any;
    public selectedDate: Date;
    public consultTerms: ConsultTerm[];
    public consultTerms2: ConsultTerm[];

    public sortedClinics: listOfClinicsPat[];
    
    public sortedDoctors: Doctor[];
    private seeDoctors: boolean;
    public selectedClinic: Clinic;
    public doctors: Doctor[] = [];
    public doctors2: Doctor[] = [];
    public seeDoctorsList: Doctor[] = [];

    public appointedExamination: appointedExamination;
    public user: User;

    constructor(private _listOfClinicsService: listOfClinicsPatService, 
                private _getConsultTypes: DeleteConsultTypeService,
                private _consultTermService: ConsultTermService,
                private _getAllDoctors: DeleteDoctorService,
                private _appointedExaminations: AppointedExaminationsService,
                private _loginService: UserService) {
        
        this.selectedType = new ConsultType(null,null,null);
        this.appointedExamination = new appointedExamination();
    }

    ngOnInit(){
        this._listOfClinicsService.getListOfClinics().subscribe(
            data=>{
                this.listClin = data;
                this.filteredClinics = data;
            },
            error=>console.error('Error list of clinics!',error)
        )
        this._getConsultTypes.getConsultTypes().subscribe(
            data=>this.types = data,
            error=> console.error('Error consult types!', error)
        )
        this._getAllDoctors.getDoctors().subscribe(
            data=>{
                this.doctors = data;
            },
            error=> console.error('Error doctors!', error)
        );

        this._loginService.getUserInfo().subscribe({next: user=>{
            this.user=user;
            console.log(user);}
        })
    }

    schedule2(examination: appointedExamination) {
        this.appointedExamination.clinicID = examination.clinicID;
        this.appointedExamination.doctorID = examination.doctorID;
        this.appointedExamination.roomID = examination.roomID;
        this.appointedExamination.typeID = examination.typeID;
        this.appointedExamination.dateTime = examination.dateTime;
        this.appointedExamination.duration = examination.duration;
        this.appointedExamination.price = examination.price;

        this.appointedExamination.patientID = this.user.id;
        this._appointedExaminations.save(this.appointedExamination).subscribe();
        console.log(this.appointedExamination);
        alert("Examination is appointed");
    }

    schedule(doc: Doctor) {
        //this.appointedExamination.clinicID = doc.clinicID;
        this.appointedExamination.doctorID = doc.id;
        this.appointedExamination.typeID = doc.typeId;

        this.appointedExamination.patientID = this.user.id;
        this._appointedExaminations.save(this.appointedExamination).subscribe();
        console.log(this.appointedExamination);
        alert("Examination is appointed");
    }

    get clinicAddress():string{
        return this._clinicAddress;
    }

    set clinicAddress(value:string){
        this._clinicAddress=value;
        this.filteredClinics = this.clinicAddress ? this.filter(this.clinicAddress):this.listClin;
    }

    get clinicRating():string{
        return this._clinicRating;
    }

    set clinicRating(value:string){
        this._clinicRating=value;
        this.filteredClinics = this.clinicRating ? this.filter2(this.clinicRating):this.listClin;
    }

    filter(filterField:string):listOfClinicsPat[]{
        filterField = filterField.toLocaleLowerCase();
        return this.listClin.filter((clinic:listOfClinicsPat)=>clinic.address.toLowerCase().indexOf(filterField)!=-1);
    }

    filter2(filterField:string):listOfClinicsPat[]{
        filterField = filterField.toLocaleLowerCase();
        return this.listClin.filter((clinic:listOfClinicsPat)=>clinic.grade.toString().indexOf(filterField)!=-1);
    }

    //filtriranje za doktora po imenu, prezimenu i oceni
    get doctorName():string{
        return this._doctorName;
    }

    set doctorName(value:string){
        this._doctorName=value;
        this.filteredDoctors = this.doctorName ? this.filterDoctorName(this.doctorName):this.doctors;
    }

    filterDoctorName(filterField:string):Doctor[]{
        filterField = filterField.toLocaleLowerCase();
        return this.doctors.filter((doctor:Doctor)=>doctor.name.toLowerCase().indexOf(filterField)!=-1);
    }

    get doctorSurname():string{
        return this._doctorSurname;
    }

    set doctorSurname(value:string){
        this._doctorSurname=value;
        this.filteredDoctors = this.doctorSurname ? this.filterDoctorSurname(this.doctorSurname):this.doctors;
    }

    filterDoctorSurname(filterField:string):Doctor[]{
        filterField = filterField.toLocaleLowerCase();
        return this.doctors.filter((doctor:Doctor)=>doctor.surname.toLowerCase().indexOf(filterField)!=-1);
    }


    get doctorGrade():string{
        return this._doctorGrade;
    }

    set doctorGrade(value:string){
        this._doctorGrade=value;
        this.filteredDoctors = this.doctorGrade ? this.filterDoctorGrade(this.doctorGrade):this.doctors;
    }

    filterDoctorGrade(filterField:string):Doctor[]{
        filterField = filterField.toLocaleLowerCase();
        return this.doctors.filter((doctor:Doctor)=>doctor.grade.toString().indexOf(filterField)!=-1);
    }

    buttonSearch(): void{
        const formatedDate = moment(this.selectedDate).format('YYYY-MM-DD')
        const selectedType2 = this.selectedType;
        this.listClin = [];
        this.seeDoctorsList = [];
        this._getAllDoctors.getDoctors().subscribe(
            data=> {
                this.doctors2 = data;
                for(let doc of this.doctors2) {
                    const formatedDateFrom = moment(doc.scheduledFrom).format('YYYY-MM-DD');
                    const formatedDateTo = moment(doc.scheduledTo).format('YYYY-MM-DD');
                    if(formatedDate <= formatedDateTo && formatedDate >= formatedDateFrom) {

                    } else {
                        if(selectedType2.id == doc.typeId) {
                            console.log("Doktor kojem tip i datum odgovaraju: ", doc);
                            this.seeDoctorsList.push(doc);
                            //TODO: uzeti sve klinike koje imaju ove doktore
                            this._listOfClinicsService.getListOfClinics().subscribe(
                                data=>{
                                    this.pListClin = data;
                                    for(let clin of this.pListClin) {
                                        if(clin.id == doc.clinic) {
                                            this.listClin.push(clin);
                                        }
                                    }
                                },
                                error=>console.error('Error list of clinics!',error)
                            )
                        }
                    }
                }
            }, error => {
                console.log("Error in getting doctors!");
            }
        )
        this.seeDoctors = false;
    }

    listOfDoctors(clinic: Clinic): void {
        this.selectedClinic = clinic;
        this.doctors = [];
        if(this.selectedType.id != null) {
            this.seeDoctors = true;
            for(let doc of this.seeDoctorsList) {
                if(this.selectedClinic.id == doc.clinic && this.selectedType.id == doc.typeId) {
                    this.doctors.push(doc);
                }
            }
        } else {
            alert("Type or date is not selected!");
        }
    }

    sortData(sort: Sort) {
        const data = this.listClin;
        if (!sort.active || sort.direction === '') {
          this.sortedClinics = data;
          return;
        }
    
        this.sortedClinics = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'name': return compare(a.name, b.name, isAsc);
            case 'address': return compare(a.address, b.address, isAsc);
            case 'description': return compare(a.description, b.description, isAsc);
            case 'grade': return compare(a.grade, b.grade, isAsc);
            default: return 0;
          }
        });
    }

    sortData2(sort: Sort) {
        const data = this.doctors;
        if (!sort.active || sort.direction === '') {
          this.sortedDoctors = data;
          return;
        }
    
        this.sortedDoctors = data.sort((a, b) => {
          const isAsc = sort.direction === 'asc';
          switch (sort.active) {
            case 'name': return compare(a.name, b.name, isAsc);
            case 'surname': return compare(a.surname, b.surname, isAsc);
            case 'grade': return compare(a.grade, b.grade, isAsc);
            default: return 0;
          }
        });
    }
    
    hideAllDoctors(): void{
        this.seeDoctors = false;
    }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}