/**
 * @fileoverview Tests for Shopping Cart Feature in AI-Augmented TDD Framework
 * @description Test cases mapped to REQ-CART-001 requirements
 * @category: Sanity
 * @type: Integration
 * @priority: Medium
 * @tags: @sanity, @cart, @module-interaction
 */

import CartPage from '../../pages/CartPage';
import WaitUtils from '../../support/utils/waitUtils';

describe('Shopping Cart Feature', { tags: ['@sanity', '@integration'] }, () => {
    const cartPage = new CartPage();

    beforeEach(() => {
        cy.login('testuser', 'password123');
        cy.visit('/products');
    });

    it('[REQ-CART-001][TC-CART-001] Verify adding a single product', { tags: ['@sanity', '@integration', '@high'] }, () => {
        cy.logTestExecution('REQ-CART-001', 'TC-CART-001');
        cartPage.addProductToCart('Product1');
        cartPage.verifyCartCount(1);
    });

    it('[REQ-CART-001][TC-CART-002] Verify adding multiple products', { tags: ['@regression', '@integration', '@medium'] }, () => {
        cy.logTestExecution('REQ-CART-001', 'TC-CART-002');
        cartPage.addProductToCart('Product1');
        cartPage.addProductToCart('Product2');
        cartPage.verifyCartCount(2);
    });

    it('[REQ-CART-001][TC-CART-003] Verify cart counter increments correctly', { tags: ['@regression', '@integration', '@low'] }, () => {
        cy.logTestExecution('REQ-CART-001', 'TC-CART-003');
        cartPage.addProductToCart('Product1');
        cartPage.verifyCartCount(1);
        cartPage.addProductToCart('Product2');
        cartPage.verifyCartCount(2);
    });
});