import { Component, OnInit } from '@angular/core';
import { UserService } from '../users.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-users',
    standalone: true,
    imports: [HttpClientModule, FormsModule, CommonModule],
    templateUrl: './users.component.html',
    providers: [UserService]
})
export class UserComponent implements OnInit {
    users: any[] = [];
    user = { Id: '', Email: '',Password:'',IsActive:'',Role_Id:''};
    editing = false;
    editId: string | null = null;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.loadUsers();
    }

    loadUsers() {
        this.userService.getUser().subscribe((data: any) => {
            this.users = data;
        });
    }

    saveUser() {
        if (this.editing) {
            this.userService.updateUser(this.editId!, this.user).subscribe(() => {
                this.loadUsers();
                this.resetForm();
            });
        } else {
            this.userService.addUser(this.user).subscribe(() => {
                this.loadUsers();
                this.resetForm();
            });
        }
    }

    editUser(user: any) {
        this.user = { ...user };
        this.editing = true;
        this.editId = user._id;
    }

    deleteUser(id: string) {
        this.userService.deleteUser(id).subscribe(() => {
            this.users.filter((user) => user._id !==id);
        });
    }
    
    resetForm() {
        this.user = { Id: '', Email: '',Password:'',IsActive:'',Role_Id:''};
        this.editing = false;
        this.editId = null;
    }
}
