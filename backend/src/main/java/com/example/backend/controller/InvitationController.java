package com.example.backend.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class InvitationController {

    @PostMapping("/invite/{name}")
    public String getConfirmationMessage(@PathVariable String name){
        return "Hello"+name.toUpperCase()+", Welcome to grand wedding";
    }
}
