package bpcl.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "request")
public class Request {
    @Column(name = "environment")
    private String environment;

    @Id
    @Column(name = "application_name")
    private String applicationName;

    @Column(name = "request_description")
    private String requestDescription;

    @Column(name = "stream")
    private String stream;

    @Column(name = "refresh_frequency")
    private String refreshFrequency;

    public Request() {
    }

    public Request(String environment, String applicationName, String requestDescription, String stream, String refreshFrequency) {
        this.environment = environment;
        this.applicationName = applicationName;
        this.requestDescription = requestDescription;
        this.stream = stream;
        this.refreshFrequency = refreshFrequency;
    }

    public String getEnvironment() {
        return environment;
    }

    public void setEnvironment(String environment) {
        this.environment = environment;
    }

    public String getApplicationName() {
        return applicationName;
    }

    public void setApplicationName(String applicationName) {
        this.applicationName = applicationName;
    }

    public String getRequestDescription() {
        return requestDescription;
    }

    public void setRequestDescription(String requestDescription) {
        this.requestDescription = requestDescription;
    }

    public String getStream() {
        return stream;
    }

    public void setStream(String stream) {
        this.stream = stream;
    }

    public String getRefreshFrequency() {
        return refreshFrequency;
    }

    public void setRefreshFrequency(String refreshFrequency) {
        this.refreshFrequency = refreshFrequency;
    }
}
