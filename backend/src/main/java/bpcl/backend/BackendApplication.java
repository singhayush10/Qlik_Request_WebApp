package bpcl.backend;

import bpcl.backend.model.Profile;
import bpcl.backend.model.Request;
import bpcl.backend.model.User;
import bpcl.backend.repository.ProfileRepository;
import bpcl.backend.repository.RequestRepository;
import bpcl.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Autowired
	private ProfileRepository profileRepository;

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private RequestRepository requestRepository;

	@Override
	public void run(String... args) throws Exception {
		/*
		Profile profile = new Profile();
		profile.setFirstName("Ayush");
		profile.setLastName("Singh");
		profile.setEmail("ayush@gmail.com");
		profile.setContact("8826910949");
		profile.setStaffNo(2001);
		profile.setDepartment("IT");
		profileRepository.save(profile);

		 */
		/*
		User user1 = new User();
		user1.setName("Ramesh");
		user1.setEmail("ramesh@gmail.com");
		user1.setDepartment("Refinery");
		user1.setType("Requestor");
		user1.setStatus("Active");
		user1.setContact("8881117772");
		user1.setStaffId(2001);
		userRepository.save(user1);

		User user2 = new User();
		user2.setName("Suraj");
		user2.setEmail("suraj@gmail.com");
		user2.setDepartment("Lubes");
		user2.setType("Requestor");
		user2.setStatus("Active");
		user2.setContact("9981117224");
		user2.setStaffId(2002);
		userRepository.save(user2);
		*/

		Request request1 = new Request();
		request1.setEnvironment("environment 1");
		request1.setApplicationName("application name 1");
		request1.setRequestDescription("request description 1");
		request1.setStream("stream 1");
		request1.setRefreshFrequency("refresh frequency 1");
		requestRepository.save(request1);

		Request request2 = new Request();
		request2.setEnvironment("environment 2");
		request2.setApplicationName("application name 2");
		request2.setRequestDescription("request description 2");
		request2.setStream("stream 2");
		request2.setRefreshFrequency("refresh frequency 2");
		requestRepository.save(request2);

	}
}
