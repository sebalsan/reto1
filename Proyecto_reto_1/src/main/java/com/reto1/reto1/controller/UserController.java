/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.reto1.reto1.controller;

import com.reto1.reto1.model.User;
import com.reto1.reto1.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author Sebastian Aldana
 */
@RestController
@RequestMapping("/api/user")
@CrossOrigin("*")
public class UserController {
    @Autowired
    /**
    *Instancia del Service de User
    */
    private UserService userService;
    
    @GetMapping("/all")
    /**
    *Metodo que trae una lista de Users
    */
    public List<User> getAll() {
        return userService.getAll();
    }
    
    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    /**
    *Metodo que registra un nuevo User
    */
    public User registrar(@RequestBody User user) {
        return userService.registrar(user);
    }
    
    @GetMapping("/{email}/{password}")
    /**
    *Metodo que autentica email y password de un User
    */
    public User autenticarUsuario(@PathVariable("email") String email, @PathVariable("password") String password) {
        return userService.autenticarUsuario(email, password);
    }
    
    @GetMapping("/{email}")
    /**
    *Metodo que trae un booleano de la existencia de el email de un User
    */
    public boolean existeEmail(@PathVariable("email") String email) {
        return userService.existeEmail(email);
    }
}
