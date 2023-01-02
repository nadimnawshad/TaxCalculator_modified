package com.controller;
import com.domain.LeaveApplication;
import com.domain.Calculation;
import com.exception.BadRequestAlertException;
import com.exception.NotFoundAlertException;
import com.service.CalculationImplService;
import com.service.CalculationService;
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
@RequestMapping("/admin/calculation/api")
public class CalculationController {

    private CalculationService calculationService;

    public CalculationController(CalculationService calculationService) {
        this.calculationService = calculationService;
    }

    @InitBinder
    public void initBinder(WebDataBinder webDataBinder) {
        StringTrimmerEditor stringTrimmerEditor = new StringTrimmerEditor(true);
        webDataBinder.registerCustomEditor(String.class, stringTrimmerEditor);
    }
    @CrossOrigin
    @PostMapping("/create")
    public ResponseEntity<Calculation> createTax(@Valid @RequestBody Calculation calculation) throws Exception {
        if (calculation.getId() != null) {
            throw new BadRequestAlertException("A new leave application cannot have an id value");
        }
        System.out.println(calculation);
        calculationService.insert(calculation);
        return ResponseEntity.created(new URI("/tax_result"))
                .body(calculation);
    }

    @CrossOrigin
    @GetMapping("/allUser")
    public ResponseEntity<List<Calculation>> getAllTaxHistory() {
        List<Calculation> calculations = calculationService.getAll();
        return ResponseEntity.ok().body(calculations);
    }

    @CrossOrigin
    @PutMapping("/user/{category}")
    public ResponseEntity<Calculation> updateUser(@Valid @RequestBody Calculation calculation,@PathVariable String category) throws Exception {
        Calculation t = calculationService.getByUserName(category);
        calculation.setId(t.getId());
        System.out.println(calculation.getId());
        if (calculation.getId() == null) {
            throw new BadRequestAlertException("Invalid id");
        }
        calculationService.update(calculation);
        return ResponseEntity.created(new URI("/leaveApplications/"))
                .body(calculation);
    }

    @CrossOrigin
    @DeleteMapping("/delete/{category}")
    public ResponseEntity<Calculation> deleteUser(@PathVariable String category) {
        Calculation t = calculationService.getByUserName(category);
        System.out.println(t);
        calculationService.delete(t.getId());
        return ResponseEntity.noContent().build();
    }

}
