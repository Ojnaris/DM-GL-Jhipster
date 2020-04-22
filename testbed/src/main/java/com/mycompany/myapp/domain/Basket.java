package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.annotations.ApiModel;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.util.Objects;
import java.time.ZonedDateTime;
import java.util.HashSet;
import java.util.Set;

import com.mycompany.myapp.domain.enumeration.BasketState;

/**
 * The Basket entity.
 */
@ApiModel(description = "The Basket entity.")
@Entity
@Table(name = "basket")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Basket implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @NotNull
    @Enumerated(EnumType.STRING)
    @Column(name = "basket_state", nullable = false)
    private BasketState basketState;

    @Column(name = "expected_delivery_time")
    private ZonedDateTime expectedDeliveryTime;

    @NotNull
    @Size(max = 280)
    @Column(name = "delivery_address", length = 280, nullable = false)
    private String deliveryAddress;

    @OneToOne
    @JoinColumn(unique = true)
    private Payment payment;

    @ManyToOne
    @JsonIgnoreProperties("baskets")
    private Deliverer basketsD;

    @ManyToOne
    @JsonIgnoreProperties("baskets")
    private Customer basketsC;

    @ManyToOne
    @JsonIgnoreProperties("baskets")
    private RestaurantOwner basketsR;

    @ManyToMany(mappedBy = "baskets")
    @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
    @JsonIgnore
    private Set<Product> products = new HashSet<>();

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public BasketState getBasketState() {
        return basketState;
    }

    public Basket basketState(BasketState basketState) {
        this.basketState = basketState;
        return this;
    }

    public void setBasketState(BasketState basketState) {
        this.basketState = basketState;
    }

    public ZonedDateTime getExpectedDeliveryTime() {
        return expectedDeliveryTime;
    }

    public Basket expectedDeliveryTime(ZonedDateTime expectedDeliveryTime) {
        this.expectedDeliveryTime = expectedDeliveryTime;
        return this;
    }

    public void setExpectedDeliveryTime(ZonedDateTime expectedDeliveryTime) {
        this.expectedDeliveryTime = expectedDeliveryTime;
    }

    public String getDeliveryAddress() {
        return deliveryAddress;
    }

    public Basket deliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
        return this;
    }

    public void setDeliveryAddress(String deliveryAddress) {
        this.deliveryAddress = deliveryAddress;
    }

    public Payment getPayment() {
        return payment;
    }

    public Basket payment(Payment payment) {
        this.payment = payment;
        return this;
    }

    public void setPayment(Payment payment) {
        this.payment = payment;
    }

    public Deliverer getBasketsD() {
        return basketsD;
    }

    public Basket basketsD(Deliverer deliverer) {
        this.basketsD = deliverer;
        return this;
    }

    public void setBasketsD(Deliverer deliverer) {
        this.basketsD = deliverer;
    }

    public Customer getBasketsC() {
        return basketsC;
    }

    public Basket basketsC(Customer customer) {
        this.basketsC = customer;
        return this;
    }

    public void setBasketsC(Customer customer) {
        this.basketsC = customer;
    }

    public RestaurantOwner getBasketsR() {
        return basketsR;
    }

    public Basket basketsR(RestaurantOwner restaurantOwner) {
        this.basketsR = restaurantOwner;
        return this;
    }

    public void setBasketsR(RestaurantOwner restaurantOwner) {
        this.basketsR = restaurantOwner;
    }

    public Set<Product> getProducts() {
        return products;
    }

    public Basket products(Set<Product> products) {
        this.products = products;
        return this;
    }

    public Basket addProduct(Product product) {
        this.products.add(product);
        product.getBaskets().add(this);
        return this;
    }

    public Basket removeProduct(Product product) {
        this.products.remove(product);
        product.getBaskets().remove(this);
        return this;
    }

    public void setProducts(Set<Product> products) {
        this.products = products;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Basket)) {
            return false;
        }
        return id != null && id.equals(((Basket) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    @Override
    public String toString() {
        return "Basket{" +
            "id=" + getId() +
            ", basketState='" + getBasketState() + "'" +
            ", expectedDeliveryTime='" + getExpectedDeliveryTime() + "'" +
            ", deliveryAddress='" + getDeliveryAddress() + "'" +
            "}";
    }
}
