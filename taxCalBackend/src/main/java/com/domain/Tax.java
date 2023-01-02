package com.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tax_info")

public class Tax {
    @Column(name = "tax_id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tax_id;

    @Column(name = "user_name")
    private String user_name;

    @Column(name = "tax_payer_category")
    private String tax_payer_category;
    @Column(name = "tax_payer_zone")
    private String tax_payer_zone;
    @Column(name = "basic_salary")
    private int basic_salary;

    @Column(name = "house_rent")
    private int house_rent;
    @Column(name = "medical")
    private int medical;
    @Column(name = "conveyance")
    private int conveyance;
    @Column(name = "commission")
    private int commission;
    @Column(name = "bonus")
    private int bonus;

    @Column(name = "investment")
    private int investment;

    @Column(name = "tax")
    private int tax;

    @Column(name = "allowable_investment")
    private int allowable_investment;

    @Column(name = "netTax")
    private int netTax;

    public Tax() {
    }


    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public int getTax() {
        return tax;
    }

    public void setTax(int tax) {
        this.tax = tax;
    }

    public int getAllowable_investment() {
        return allowable_investment;
    }

    public void setAllowable_investment(int allowable_investment) {
        this.allowable_investment = allowable_investment;
    }

    public int getNetTax() {
        return netTax;
    }

    public void setNetTax(int netTax) {
        this.netTax = netTax;
    }

    public Long getId() {
        return tax_id;
    }

    public void setId(Long tax_id) {
        this.tax_id = tax_id;
    }

    public void setTax_payer_category(String tax_payer_category) {
        this.tax_payer_category = tax_payer_category;
    }

    public String getTax_payer_category() {
        return tax_payer_category;
    }

    public void setTax_payer_zone(String tax_payer_zone) {
        this.tax_payer_zone = tax_payer_zone;
    }

    public String getTax_payer_zone() {
        return tax_payer_zone;
    }

    public void setBasic_salary(int basic_salary) {
        this.basic_salary = basic_salary;
    }

    public int getBasic_salary() {
        return basic_salary;
    }

    public void setHouse_rent(int house_rent) {
        this.house_rent = house_rent;
    }

    public int getHouse_rent() {
        return house_rent;
    }

    public void setMedical(int medical) {
        this.medical = medical;
    }

    public int getMedical() {
        return medical;
    }

    public void setConveyance(int conveyance) {
        this.conveyance = conveyance;
    }

    public int getConveyance() {
        return conveyance;
    }

    public void setCommission(int commission) {
        this.commission = commission;
    }

    public int getCommission() {
        return commission;
    }

    public void setBonus(int bonus) {
        this.bonus = bonus;
    }

    public int getBonus() {
        return bonus;
    }

    public void setInvestment(int investment) {
        this.investment = investment;
    }

    public int getInvestment() {
        return investment;
    }
}
