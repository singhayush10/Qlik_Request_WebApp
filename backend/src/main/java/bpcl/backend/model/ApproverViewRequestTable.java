package bpcl.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "approver_view_request_table")
public class ApproverViewRequestTable {


    @Column(name = "request_no")
    private int requestNo;

    @Column(name = "request_made_by")
    private String requestMadeBy;

    @Id
    @Column(name = "application_name")
    private String applicationName; //request name

    @Column(name = "due_date")
    private String dueDate;

    @Column(name = "reviewer_assigned")
    private String reviewerAssigned;

    @Column(name = "approved_or_rejected")
    private String approvedOrRejected;

    @Column(name = "remarks")
    private String remarks;

    public ApproverViewRequestTable() {
    }

    public ApproverViewRequestTable(int requestNo, String requestMadeBy, String applicationName, String dueDate, String reviewerAssigned, String approvedOrRejected, String remarks) {
        this.requestNo = requestNo;
        this.requestMadeBy = requestMadeBy;
        this.applicationName = applicationName;
        this.dueDate = dueDate;
        this.reviewerAssigned = reviewerAssigned;
        this.approvedOrRejected = approvedOrRejected;
        this.remarks = remarks;
    }

    public int getRequestNo() {
        return requestNo;
    }

    public void setRequestNo(int requestNo) {
        this.requestNo = requestNo;
    }

    public String getRequestMadeBy() {
        return requestMadeBy;
    }

    public void setRequestMadeBy(String requestMadeBy) {
        this.requestMadeBy = requestMadeBy;
    }

    public String getApplicationName() {
        return applicationName;
    }

    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    public String getDueDate() {
        return dueDate;
    }

    public void setDueDate(String dueDate) {
        this.dueDate = dueDate;
    }

    public String getReviewerAssigned() {
        return reviewerAssigned;
    }

    public void setReviewerAssigned(String reviewerAssigned) {
        this.reviewerAssigned = reviewerAssigned;
    }

    public String getApprovedOrRejected() {
        return approvedOrRejected;
    }

    public void setApprovedOrRejected(String approvedOrRejected) {
        this.approvedOrRejected = approvedOrRejected;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
