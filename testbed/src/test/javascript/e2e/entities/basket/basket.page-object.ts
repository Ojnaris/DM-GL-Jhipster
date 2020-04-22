import { element, by, ElementFinder } from 'protractor';

export class BasketComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-basket div table .btn-danger'));
  title = element.all(by.css('jhi-basket div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class BasketUpdatePage {
  pageTitle = element(by.id('jhi-basket-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  basketStateSelect = element(by.id('field_basketState'));
  expectedDeliveryTimeInput = element(by.id('field_expectedDeliveryTime'));
  deliveryAddressInput = element(by.id('field_deliveryAddress'));

  paymentSelect = element(by.id('field_payment'));
  basketsDSelect = element(by.id('field_basketsD'));
  basketsCSelect = element(by.id('field_basketsC'));
  basketsRSelect = element(by.id('field_basketsR'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setBasketStateSelect(basketState: string): Promise<void> {
    await this.basketStateSelect.sendKeys(basketState);
  }

  async getBasketStateSelect(): Promise<string> {
    return await this.basketStateSelect.element(by.css('option:checked')).getText();
  }

  async basketStateSelectLastOption(): Promise<void> {
    await this.basketStateSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async setExpectedDeliveryTimeInput(expectedDeliveryTime: string): Promise<void> {
    await this.expectedDeliveryTimeInput.sendKeys(expectedDeliveryTime);
  }

  async getExpectedDeliveryTimeInput(): Promise<string> {
    return await this.expectedDeliveryTimeInput.getAttribute('value');
  }

  async setDeliveryAddressInput(deliveryAddress: string): Promise<void> {
    await this.deliveryAddressInput.sendKeys(deliveryAddress);
  }

  async getDeliveryAddressInput(): Promise<string> {
    return await this.deliveryAddressInput.getAttribute('value');
  }

  async paymentSelectLastOption(): Promise<void> {
    await this.paymentSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async paymentSelectOption(option: string): Promise<void> {
    await this.paymentSelect.sendKeys(option);
  }

  getPaymentSelect(): ElementFinder {
    return this.paymentSelect;
  }

  async getPaymentSelectedOption(): Promise<string> {
    return await this.paymentSelect.element(by.css('option:checked')).getText();
  }

  async basketsDSelectLastOption(): Promise<void> {
    await this.basketsDSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async basketsDSelectOption(option: string): Promise<void> {
    await this.basketsDSelect.sendKeys(option);
  }

  getBasketsDSelect(): ElementFinder {
    return this.basketsDSelect;
  }

  async getBasketsDSelectedOption(): Promise<string> {
    return await this.basketsDSelect.element(by.css('option:checked')).getText();
  }

  async basketsCSelectLastOption(): Promise<void> {
    await this.basketsCSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async basketsCSelectOption(option: string): Promise<void> {
    await this.basketsCSelect.sendKeys(option);
  }

  getBasketsCSelect(): ElementFinder {
    return this.basketsCSelect;
  }

  async getBasketsCSelectedOption(): Promise<string> {
    return await this.basketsCSelect.element(by.css('option:checked')).getText();
  }

  async basketsRSelectLastOption(): Promise<void> {
    await this.basketsRSelect
      .all(by.tagName('option'))
      .last()
      .click();
  }

  async basketsRSelectOption(option: string): Promise<void> {
    await this.basketsRSelect.sendKeys(option);
  }

  getBasketsRSelect(): ElementFinder {
    return this.basketsRSelect;
  }

  async getBasketsRSelectedOption(): Promise<string> {
    return await this.basketsRSelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class BasketDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-basket-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-basket'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
