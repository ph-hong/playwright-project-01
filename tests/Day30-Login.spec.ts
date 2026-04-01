import test from "@playwright/test";
import LoginPage from "../models/pages/LoginPage";
import { LoginCreds } from "../types/DataTypes";

const loginCreds: LoginCreds = {
    username: "tomsmith",
    password: "SuperSecretPassword!",
};

test.describe("Page Object Model", () => {
    test("Login Test", async ({ page }) => {
        const loginPage = new LoginPage(page);
        await page.goto("/login");
        await loginPage.username().fill(loginCreds.username);
        await loginPage.password().fill(loginCreds.password);
        await loginPage.loginButton().click();
    });

})