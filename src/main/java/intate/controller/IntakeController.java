package intate.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IntakeController {

		@GetMapping("/")
		public String home() {
			return "/index";
		}
}
