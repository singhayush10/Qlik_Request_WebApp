package bpcl.backend.model;

import javax.persistence.*;

@Entity
@Table(name = "profile")
public class Profile {
    @Id
    private int staffNo;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "email")
    private String email;
    @Column(name = "contact")
    private String contact;
    @Column(name = "department")
    private String department;

    public Profile() {
    }

    public Profile(int staffNo, String firstName, String lastName, String email, String contact, String department) {
        this.staffNo = staffNo;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
        this.department = department;
    }

    public int getStaffNo() {
        return staffNo;
    }

    public void setStaffNo(int staffNo) {
        this.staffNo = staffNo;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}
