package com.controller;
import com.domain.LeaveApplication;
import com.domain.TaxUser;
import com.exception.BadRequestAlertException;
import com.exception.NotFoundAlertException;
import com.service.TaxUserImplService;
import com.service.TaxUserService;
import org.springframework.beans.propertyeditors.StringTrimmerEditor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.util.List;
import java.util.Optional;

/*@Controller*/
@RestController
@RequestMapping("/admin/user/api")
public class AdminUserController {

    private TaxUserService taxUserService;

    public AdminUserController(TaxUserService taxUserService) {
        this.taxUserService = taxUserService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }
    @CrossOrigin
    @PostMapping("/create")
    public ResponseEntity<TaxUser> createTax(@Valid @RequestBody TaxUser taxUser) throws Exception {
        if (taxUser.getUser_id() != null) {
            throw new BadRequestAlertException("A new leave application cannot have an id value");
        }
        System.out.println(taxUser);
        taxUserService.insert(taxUser);
        return ResponseEntity.created(new URI("/tax_result"))
                .body(taxUser);
    }

    @CrossOrigin
    @GetMapping("/allUser")
    public ResponseEntity<List<TaxUser>> getAllTaxHistory() {
        List<TaxUser> taxUsers = taxUserService.getAll();
        return ResponseEntity.ok().body(taxUsers);
    }

    @CrossOrigin
    @PutMapping("/user/{user_name}")
    public ResponseEntity<TaxUser> updateUser(@Valid @RequestBody TaxUser taxUser,@PathVariable String user_name) throws Exception {
        TaxUser t = taxUserService.getByUserName(user_name);
        taxUser.setUser_id(t.getUser_id());
        System.out.println(taxUser.getUser_id());
        if (taxUser.getUser_id() == null) {
            throw new BadRequestAlertException("Invalid id");
        }
        taxUserService.update(taxUser);
        return ResponseEntity.created(new URI("/leaveApplications/"))
                .body(taxUser);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{user_name}")
    public ResponseEntity<TaxUser> deleteUser(@PathVariable String user_name) {
        TaxUser t = taxUserService.getByUserName(user_name);
        System.out.println(t);
        taxUserService.delete(t.getUser_id());
        return ResponseEntity.noContent().build();
    }

}
