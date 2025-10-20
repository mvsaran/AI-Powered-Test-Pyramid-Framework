# 🤖 AI-Driven Test Categorization

## 🎯 Overview
This project demonstrates an AI-optimized approach to Cypress test automation, implementing intelligent test categorization and the Test Pyramid principle for optimal test coverage and maintenance.

## 🧠 AI-Driven Test Design
The test suite is automatically organized and optimized using AI principles to:
- 📊 Categorize tests based on purpose and scope
- 🎯 Apply appropriate tags and priorities
- 🔄 Maintain optimal test distribution
- 🏗️ Follow the Test Pyramid architecture

## 🏗️ Project Structure
```
cypress/
├─ e2e/
│  ├─ smoke/          # Critical path tests
│  │  └─ loginTests.cy.js
│  ├─ sanity/         # Quick health checks
│  │  └─ cartTests.cy.js
│  ├─ regression/     # Deep workflow tests
│  │  └─ checkoutTests.cy.js
├─ pages/             # Page Object Models
│  ├─ LoginPage.js
│  ├─ CartPage.js
│  ├─ CheckoutPage.js
```

## 📝 Test Categories

### 🔥 Smoke Tests
- **Purpose**: Validate critical system functionality
- **Priority**: High
- **Tag**: @smoke
- **Example**: User login, core navigation
- **Location**: `cypress/e2e/smoke/`

### 🔍 Sanity Tests
- **Purpose**: Quick verification of module updates
- **Priority**: Medium
- **Tag**: @sanity
- **Example**: Cart operations, profile updates
- **Location**: `cypress/e2e/sanity/`

### 📊 Regression Tests
- **Purpose**: Complete workflow validation
- **Priority**: High
- **Tag**: @regression
- **Example**: End-to-end checkout process
- **Location**: `cypress/e2e/regression/`

## 🎭 Test Pyramid Distribution

```
    🔺 E2E (10%)
   ◀️▶️ Integration (20%)
🔲🔲🔲🔲 Unit (70%)
```

## 🏷️ Test Metadata Structure
```javascript
/**
 * @category: [Smoke|Sanity|Regression]
 * @type: [Unit|Integration|E2E]
 * @priority: [High|Medium|Low]
 * @tags: @smoke, @critical, @feature
 */
```

## 🚀 Running Tests

### By Category
```bash
# Smoke Tests
npx cypress run --env tags=@smoke

# Sanity Tests
npx cypress run --env tags=@sanity

# Regression Tests
npx cypress run --env tags=@regression
```

### By Priority
```bash
# High Priority Tests
npx cypress run --env tags=@high

# Medium Priority Tests
npx cypress run --env tags=@medium
```

### By Feature
```bash
# Login Feature Tests
npx cypress run --env tags=@login

# Cart Feature Tests
npx cypress run --env tags=@cart

# Checkout Feature Tests
npx cypress run --env tags=@checkout
```

## 🤖 AI-Driven Test Optimization

### Auto-Classification Logic
The AI system categorizes tests based on:
1. 🎯 Test purpose and scope
2. 📊 Business impact
3. 🔄 Execution frequency
4. ⚡ Performance impact

### Smart Tagging System
- 🏷️ Dynamic tag generation
- 📋 Automated priority assignment
- 🎯 Intelligent categorization
- 🔍 Coverage analysis

## 🔧 Maintenance Guidelines

1. **File Organization**
   - Keep tests in appropriate category folders
   - Maintain consistent file naming
   - Update metadata tags when needed

2. **Code Quality**
   - Follow Page Object Model pattern
   - Maintain DRY (Don't Repeat Yourself) principle
   - Use descriptive test names

3. **Test Distribution**
   - Monitor test pyramid ratios
   - Balance coverage across categories
   - Optimize execution time

## 📈 Benefits

- 🚀 Faster test execution through intelligent categorization
- 🎯 Better test coverage with pyramid approach
- 📊 Easier maintenance with clear organization
- 🔍 Quick issue identification with proper tagging
- ⚡ Efficient CI/CD integration

## 🎯 Implementation Guide with Prompts

### 🤖 AI Prompts for Test Generation

1. **Test Category Analysis**
```
Analyze this test scenario and suggest the appropriate category (smoke/sanity/regression):
- Scenario: [Describe your test scenario]
- Business Impact: [High/Medium/Low]
- Feature Area: [Login/Cart/Checkout/etc.]
- Execution Time: [Expected duration]
```

2. **Test Structure Generation**
```
Generate a Cypress test structure for:
- Category: [Smoke/Sanity/Regression]
- Feature: [Feature name]
- Test Case: [Test case description]
- Include: Page Object Model, Test metadata, Tags
```

3. **Test Optimization Prompt**
```
Optimize this test case for:
- Execution Speed
- Reliability
- Maintenance
- Code: [Paste your test code]
```

### 🛠️ Implementation Steps

1. **Setting Up Test Structure**
   ```javascript
   // cypress/e2e/[category]/[featureName].cy.js
   import { [PageName] } from '../../pages/[PageName]'

   describe('[Feature] Tests', () => {
     beforeEach(() => {
       // Setup code
     })

     it('[test description]', () => {
       // Test implementation
     })
   })
   ```

2. **Creating Page Objects**
   ```javascript
   // cypress/pages/[PageName].js
   class [PageName] {
     // Page elements
     elements = {
       element1: () => cy.get('[selector]'),
       element2: () => cy.get('[selector]')
     }

     // Page actions
     action1() {
       return this.elements.element1().click()
     }
   }

   export default new [PageName]()
   ```

3. **Adding Test Metadata**
   ```javascript
   /**
    * @category Smoke
    * @type E2E
    * @priority High
    * @tags @smoke, @login, @critical
    */
   describe('Login Feature', () => {
     // Test implementation
   })
   ```

### 🤖 AI-Driven Test Generation Process

1. **Use the Category Analysis Prompt** to determine test placement
2. **Apply the Structure Generation Prompt** to create test skeleton
3. **Implement the test** following the code templates
4. **Use the Optimization Prompt** to refine the implementation
5. **Add metadata and tags** based on AI suggestions

## 🎭 Actual Prompts Used in Development

### 1. Initial Framework Analysis and Implementation Prompt
```
You are an expert QA Automation Architect specializing in the Cypress Testing Framework and AI-driven Test Suite Optimization using the Test Pyramid (Unit, Integration, E2E) principle.

Analyze the following Cypress test suite and automatically organize existing tests into categorized folders (smoke, sanity, regression) and tag them by type and priority.

🧩 Classification Rules

Smoke Tests
- Validate essential user flows that determine if the app is working.
- Examples: login, home page navigation, product listing.
- Tag as: @smoke, Priority: High

Sanity Tests
- Quick checks for modules recently updated.
- Examples: add to cart, remove from cart, update profile.
- Tag as: @sanity, Priority: Medium

Regression Tests
- Deep and complete coverage for business-critical workflows.
- Examples: checkout flow, payment, order confirmation.
- Tag as: @regression, Priority: High

🧪 Test Pyramid Alignment
- Unit (70%) → Page object method-level validations.
- Integration (20%) → Interaction between modules (e.g., Login + Cart).
- E2E (10%) → Full user journey (e.g., Checkout flow).

Test Metadata Format:
// @category: Smoke
// @type: E2E
// @priority: High

📁 Target Folder Structure:
cypress/
├─ e2e/
│  ├─ smoke/
│  │  └─ loginTests.cy.js
│  ├─ sanity/
│  │  └─ cartTests.cy.js
│  ├─ regression/
│  │  └─ checkoutTests.cy.js
├─ pages/
│  ├─ LoginPage.js
│  ├─ CartPage.js
│  ├─ CheckoutPage.js

⚙️ Deliverables:
1. Move *.cy.js files into appropriate folders
2. Add AI-generated metadata tags
3. Create test summary table
4. Ensure test maintainability
5. Provide sample Cypress run commands
```

### 2. Framework Setup Prompt
```
Create a comprehensive Cypress test automation framework with:
- AI-driven test categorization (smoke, sanity, regression)
- Page Object Model implementation
- Test pyramid approach
- Smart tagging system
- Clear folder structure
Provide the complete folder structure and implementation details.
```

### 2. Test Category Structure Prompt
```
Design a test categorization strategy that:
- Follows the Test Pyramid principle
- Implements smoke, sanity, and regression test categories
- Includes proper tagging and metadata
- Optimizes test execution and maintenance
Provide the folder structure and metadata format.
```

### 3. Page Object Generation Prompt
```
Create a Page Object Model structure for:
- Login functionality
- Shopping cart operations
- Checkout process
Include element locators, actions, and verification methods.
```

### 4. Test Case Generation Prompt
```
Generate Cypress test cases for [feature] that:
- Follow the appropriate test category (smoke/sanity/regression)
- Use the Page Object Model
- Include proper tags and metadata
- Implement best practices for reliability and maintenance
```

### 5. Test Optimization Prompt
```
Optimize the test suite for:
- Execution speed
- Reliability
- Maintainability
- Code reusability
Provide specific recommendations and code examples.
```

### 6. Documentation Generation Prompt
```
Create comprehensive documentation for the framework that includes:
- Project structure explanation
- Test categorization details
- Implementation guidelines
- Maintenance best practices
- Running tests instructions
Use proper markdown formatting with emojis for better readability.
```

These prompts were iteratively used with GitHub Copilot to develop different aspects of the framework, ensuring a comprehensive and well-structured test automation solution.

## 🤝 Contributing

1. Follow the existing folder structure
2. Add appropriate metadata tags
3. Update test distribution metrics
4. Maintain the test pyramid balance

## 📖 Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Page Object Pattern](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/)
- [Test Pyramid](https://martinfowler.com/articles/practical-test-pyramid.html)

## 📝 License

MIT License - feel free to use and modify for your projects!

## Author

Saran Kumar
