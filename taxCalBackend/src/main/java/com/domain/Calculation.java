package com.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateSerializer;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "tax_calculation_details")

public class Calculation {
    @Column(name = "id")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "category")
    private String category;

    @Column(name = "slab_one")
    private int slab_one;

    @Column(name = "slab_two")
    private int slab_two;
    @Column(name = "slab_three")
    private int slab_three;
    @Column(name = "slab_four")
    private int slab_four;
    @Column(name = "slab_five")
    private int slab_five;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public int getSlab_one() {
        return slab_one;
    }

    public void setSlab_one(int slab_one) {
        this.slab_one = slab_one;
    }

    public int getSlab_two() {
        return slab_two;
    }

    public void setSlab_two(int slab_two) {
        this.slab_two = slab_two;
    }

    public int getSlab_three() {
        return slab_three;
    }

    public void setSlab_three(int slab_three) {
        this.slab_three = slab_three;
    }

    public int getSlab_four() {
        return slab_four;
    }

    public void setSlab_four(int slab_four) {
        this.slab_four = slab_four;
    }

    public int getSlab_five() {
        return slab_five;
    }

    public void setSlab_five(int slab_five) {
        this.slab_five = slab_five;
    }



}
