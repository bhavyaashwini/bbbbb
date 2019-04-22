import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'; 
import { AuthService } from './services/auth/auth.service';
import { UserService } from './services/user/user.service';
import { employeeService } from './services/employee/employee.service';
import { PhonePipe } from './pipes/phone.pipe';
import { AppComponent } from './components/index/app.component';
import { employeeuserComponent } from './components/employee/user/employee-user.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent, homeChildRoutes } from './components/home/home.component';
import { HighlightemployeeDirective } from './directives/highlight-employee.directive';
import { HrpageComponent } from './components/employee/hrpage/hrpage.component';
import { AdminComponent } from './components/employee/admin/admin.component';
import { EmployeelistComponent } from './components/employee/employeelist/employeelist.component';
import { DatamanagementComponent } from './components/employee/datamanagement/datamanagement.component';
import { ApplicationmanagementComponent } from './components/employee/applicationmanagement/applicationmanagement.component';
import { JobopeningmanagementComponent } from './components/employee/jobopeningmanagement/jobopeningmanagement.component';
import { PolicylistComponent } from './components/employee/policylist/policylist.component';
import { HrComponent } from './components/employee/hr/hr.component';
import { PayrollComponent } from './components/employee/payroll/payroll.component';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { BenefitsComponent } from './components/employee/benefits/benefits.component';
import { RecruitingComponent } from './components/employee/recruiting/recruiting.component';
import { PerformanceComponent } from './components/employee/performance/performance.component';
import { AddpolicyComponent } from './components/employee/addpolicy/addpolicy.component';
import { OnboardingComponent } from './components/employee/onboarding/onboarding.component';
import { CandidateComponent } from './components/employee/candidate/candidate.component';
import { CompensationComponent } from './components/employee/compensation/compensation.component';
import { TrainingComponent } from './components/employee/training/training.component';
import { DefiningthejobComponent } from './components/employee/definingthejob/definingthejob.component';
import { SearchingforjobComponent } from './components/employee/searchingforjob/searchingforjob.component';
import { AddjobdescriptionComponent } from './components/employee/addjobdescription/addjobdescription.component';
import { AddjobspecificationComponent } from './components/employee/addjobspecification/addjobspecification.component';
import { AddcompensationComponent } from './components/employee/addcompensation/addcompensation.component';
import { AddtrainingComponent } from './components/employee/addtraining/addtraining.component';
import { SalaryslipComponent } from './components/employee/salaryslip/salaryslip.component';
import { LeaveComponent } from './components/employee/leave/leave.component';
import { Salaryslip2Component } from './components/employee/salaryslip2/salaryslip2.component';
import { Salaryslip3Component } from './components/employee/salaryslip3/salaryslip3.component';
import { Salaryslip4Component } from './components/employee/salaryslip4/salaryslip4.component';
import { Salaryslip5Component } from './components/employee/salaryslip5/salaryslip5.component';
import { Leave2Component } from './components/employee/leave2/leave2.component';
import { Leave3Component } from './components/employee/leave3/leave3.component';
import { Leave4Component } from './components/employee/leave4/leave4.component';
import { Leave5Component } from './components/employee/leave5/leave5.component';
import { Employee1Component } from './components/employee/employee1/employee1.component';
import { Employee2Component } from './components/employee/employee2/employee2.component';
import { Employee3Component } from './components/employee/employee3/employee3.component';
import { Employee4Component } from './components/employee/employee4/employee4.component';
import { Employee5Component } from './components/employee/employee5/employee5.component';
import { Manage1Component } from './components/employee/manage1/manage1.component';
import { Manage2Component } from './components/employee/manage2/manage2.component';
import { Manage3Component } from './components/employee/manage3/manage3.component';
import { Manage4Component } from './components/employee/manage4/manage4.component';
import { Manage5Component } from './components/employee/manage5/manage5.component';
import { CustomerComponent } from './components/employee/customer/customer.component';
import { PrintLayoutComponent } from './print-layout/print-layout.component';
import { TestComponent } from './components/employee/test/test.component';
// Parent Routes
const routes : Routes = [
{
	path: '',
	component: HomeComponent,
	children :homeChildRoutes,
	canActivate : [AuthService]
},
{
	path: 'login',
	component: LoginComponent
},
{
	path:'user',
	component:employeeuserComponent
},
{
	path:'hrpage',
	component:HrpageComponent
},
{
	path:'admin',
	component:AdminComponent
},
{
	path:'policylist',
	component:PolicylistComponent
},
{
	path:'employeelist',
	component:EmployeelistComponent
},


{
	path:'applicationmanagement',
	component:ApplicationmanagementComponent
	},
	{
		path:'datamanagement',
		component:DatamanagementComponent
	},
	{
		path:'jobopeningmanagement',
		component:JobopeningmanagementComponent
	},
	
	{
		path:'hr',
		component:HrComponent
	},
	{
		path:'payroll',
		component:PayrollComponent
	},
	{
		path:'employee',
		component: EmployeeComponent
	},
	
	{
		path:'benefits',
		component: BenefitsComponent
	},
	{
		path:'recruiting',
		component:  RecruitingComponent
	},
	{
		path:'performance',
		component:PerformanceComponent
	},
	{
		path:'addpolicy',
		component:AddpolicyComponent
	  },
	  {
		  path:'onboarding',
		  component:OnboardingComponent
	  },
	  {
		path:'candidate',
		component:CandidateComponent
	},
	{
		path:'compensation',
		component:CompensationComponent
	},
	{
		path:'training',
		component:TrainingComponent
	},
	{
		path:'test',
		component:TestComponent
	},
	{
		path:'definingthejob',
		component:DefiningthejobComponent
	},
	{
		path:'addjobdescription',
		component:AddjobdescriptionComponent
	},
	{
		path:'addjobspecification',
		component:AddjobspecificationComponent
	},
	{
		path:'addcompensation',
		component:AddcompensationComponent
		},
		{
			path:'addtraining',
			component:AddtrainingComponent
		},
	{
		path:'salaryslip',
		component:SalaryslipComponent
	},
	{
		path:'salaryslip2',
    component:Salaryslip2Component
	},
	{
		path:'salaryslip3',
    component:Salaryslip3Component
	},
	{
		path:'salaryslip4',
    component:Salaryslip4Component
	},
	{
		path:'salaryslip5',
    component:Salaryslip5Component
	},
	{
		 path:'leave',
		 component:LeaveComponent
	},
	{
		path:'leave2',
		component:Leave2Component
 },
 {
	path:'leave3',
	component:Leave3Component
},
{
	path:'leave4',
	component:Leave4Component
},
{
	path:'leave5',
	component:Leave5Component
},
{
	path:'manage1',
	component:Manage1Component
},
{
	path:'manage2',
	component:Manage2Component
},
{
	path:'manage3',
	component:Manage3Component
},
{
	path:'manage4',
	component:Manage4Component
},
{
	path:'manage5',
	component:Manage5Component
},
{
	path:'employee1',
	component:Employee1Component
},
{
	path:'employee2',
	component:Employee2Component
},
{
	path:'employee3',
	component:Employee3Component
},
{
	path:'employee4',
	component:Employee4Component
},
{
	path:'employee5',
	component:Employee5Component
},
	{
	path: '**',
	redirectTo: ''
}

];

@NgModule({
	declarations: [
	AppComponent,
	
	employeeuserComponent,

	LoginComponent,
	HomeComponent,
	//FilterPipe,
	PhonePipe,
	HighlightemployeeDirective,
	HrpageComponent,
	AdminComponent,
	EmployeelistComponent,
	
	DatamanagementComponent,
	ApplicationmanagementComponent,
	JobopeningmanagementComponent,
	PolicylistComponent,
	HrComponent,
	PayrollComponent,
	EmployeeComponent,
    BenefitsComponent,
	RecruitingComponent,
	PerformanceComponent,
	AddpolicyComponent,
	OnboardingComponent,
	CandidateComponent,
	CompensationComponent,
	TrainingComponent,
	DefiningthejobComponent,
	SearchingforjobComponent,
	AddjobdescriptionComponent,
	AddjobspecificationComponent,
	AddcompensationComponent,
	AddtrainingComponent,
	SalaryslipComponent,
	LeaveComponent,
	Salaryslip2Component,
	Salaryslip3Component,
	Salaryslip4Component,
	Salaryslip5Component,
	Leave2Component,
	Leave3Component,
	Leave4Component,
	Leave5Component,
	Employee1Component,
	Employee2Component,
	Employee3Component,
	Employee4Component,
	Employee5Component,
	Manage1Component,
	Manage2Component,
	Manage3Component,
	Manage4Component,
	Manage5Component,
	CustomerComponent,
	PrintLayoutComponent,
	TestComponent,


	
	//AdminpageComponent

	],
	imports: [
	BrowserModule,
	RouterModule,
	RouterModule.forRoot(routes),
	FormsModule,
	ReactiveFormsModule,
	BrowserAnimationsModule,
	
	ToastrModule.forRoot({ 
		timeOut: 3000,
		positionClass: 'toast-bottom-right',
		preventDuplicates: true,

	}),
	],
	providers: [AuthService,UserService,employeeService],
	bootstrap: [AppComponent]
})

// enableProdMode();

export class AppModule { }
