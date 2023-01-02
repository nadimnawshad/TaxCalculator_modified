package com.controller;
import com.domain.Tax;
import com.exception.BadRequestAlertException;
import com.exception.NotFoundAlertException;
import com.service.TaxImplService;
import com.service.TaxService;
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
@RequestMapping("/User/api")
public class TaxController {

    private TaxService taxService;

    public TaxController(TaxService taxService) {
        this.taxService = taxService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }
    @CrossOrigin
    @PostMapping("/tax_calculation")
    public ResponseEntity<Tax> createTax(@Valid @RequestBody Tax tax) throws Exception {
        if (tax.getId() != null) {
            throw new BadRequestAlertException("A new leave application cannot have an id value");
        }
        System.out.println(tax);
        taxService.insert(tax);
        return ResponseEntity.created(new URI("/tax_result"))
                .body(tax);
    }

    @CrossOrigin
    @GetMapping("/tax_history")
    public ResponseEntity<List<Tax>> getAllTaxHistory() {
        List<Tax> tax = taxService.getAll();
        return ResponseEntity.ok().body(tax);
    }
    @CrossOrigin
    @GetMapping("/tax_history/{username}")
    public ResponseEntity<List<Tax>> getAllTaxHistory(@PathVariable String username) {
        System.out.println(username);
        List<Tax> tax = taxService.getByUserName(username);
        System.out.println(tax);
        return ResponseEntity.ok().body(tax);
    }

}
