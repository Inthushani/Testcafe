
import { fixture,test,ClientFunction} from "testcafe";
import Login from '../PageObjects/Login'

fixture("First Fixture")
    .page("https://www.saucedemo.com");
    
    

    test ("First Test", async t =>{
        Login.login("performance_glitch_user","secret_sauce")
        await t
    
        
        .click('#add-to-cart-sauce-labs-fleece-jacket')
        .click('#add-to-cart-sauce-labs-bolt-t-shirt')
        .click('#add-to-cart-sauce-labs-bike-light')
        .click('#shopping_cart_container')
        .click('#checkout')
        .typeText('#first-name','Inthushani')
        .typeText('#last-name','Thanabalasingam')
        .typeText('#postal-code','40000')
        .click('#continue')
        .click('#finish')
    
         });
