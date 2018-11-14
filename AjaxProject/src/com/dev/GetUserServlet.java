package com.dev;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/GetUserServlet")
public class GetUserServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

		String paciente = request.getParameter("nomePaciente").trim();
		String idade = request.getParameter("idadePaciente");
		
		
		String greetings = "paciente : " + paciente+ " / idade : "+idade;
		
		response.setContentType("text/plain");
		response.getWriter().write(greetings);
	}

}

