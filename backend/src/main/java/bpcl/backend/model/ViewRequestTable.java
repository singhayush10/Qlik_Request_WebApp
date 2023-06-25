package bpcl.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "view_request_table")
public class ViewRequestTable {

    @Id
    @Column(name = "application_name")
    private String applicationName;

    @Column(name = "sent")
    private String sent;

    @Column(name = "approver")
    private String approver;

    @Column(name = "reviewer")
    private String reviewer;

    @Column(name = "due_date")
    private String dueDate;

    @Column(name = "status")
    private String status;

    @Column(name = "approved_or_rejected")
    private String approvedOrRejected;

    public ViewRequestTable() {
    }

    public ViewRequestTable(String applicationName, String sent, String approver, String reviewer, String dueDate, String status, String approvedOrRejected) {
        this.applicationName = applicationName;
        this.sent = sent;
        this.approver = approver;
        this.reviewer = reviewer;
        this.dueDate = dueDate;
        this.status = status;
        this.approvedOrRejected = approvedOrRejected;
    }

    public String getApplicationName() {
        return applicationName;
    }

    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    public String getSent() {
        return sent;
    }

    public void setSent(String sent) {
        this.sent = sent;
    }

    public String getApprover() {
        return approver;
    }

    public void setApprover(String approver) {
        this.approver = approver;
    }

    public String getReviewer() {
        return reviewer;
    }

    public void setReviewer(String reviewer) {
        this.reviewer = reviewer;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getApprovedOrRejected() {
        return approvedOrRejected;
    }

    public void setApprovedOrRejected(String approvedOrRejected) {
        this.approvedOrRejected = approvedOrRejected;
    }
}
