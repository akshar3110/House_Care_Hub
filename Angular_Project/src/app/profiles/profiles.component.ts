import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ProfilesService } from '../profiles.service';


@Component({
    selector: 'app-profiles',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './profiles.component.html',
    providers: [ProfilesService]
})
export class ProfilesComponent implements OnInit {
    profiles: any[] = [];
    profile = {Id:'',FullName:'',ContactNumber:'',Address:'',Gender:'',DateOfBirth:'',ProfilePictureFileName:'',UserId:'',EmployeeId:''}
    editing = false;
    editId: string | null = null;
    profileService: any;

    constructor(private profilesService: ProfilesService) {}

    ngOnInit() {
        this.loadProfiles();
    }

    loadProfiles() {
        this.profilesService.getProfiles().subscribe((data: any) => {
            this.profiles = data;
        });
    }

    saveProfiles() {
        if (this.editing) {
            this.profilesService.updateProfiles(this.editId!, this.profile).subscribe(() => {
                this.loadProfiles();
                this.resetForm();
            });
        } else {
            this.profilesService.addProfiles(this.profile).subscribe(() => {
                this.loadProfiles();
                this.resetForm();
            });
        }
    }

    editProfiles(profile: any) {
        this.profile = { ...profile };
        this.editing = true;
        this.editId = profile._id;
    }

    deleteProfiles(id: string) {
      this.profilesService.deleteProfiles(id).subscribe(() => {
          this.loadProfiles();
      });
  }
    
    resetForm() {
        this.profile = {Id:'',FullName:'',ContactNumber:'',Address:'',Gender:'',DateOfBirth:'',ProfilePictureFileName:'',UserId:'',EmployeeId:''}
        this.editing = false;
        this.editId = null;
    }
}
