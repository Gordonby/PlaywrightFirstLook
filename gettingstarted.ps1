############################################################################################
# Getting started

#Install browser (It'll promot you to install the main Playwright package)
npx playwright install chromium

#record activity in browser to generate a test file
npx playwright codegen wikipedia.org

#open as an emulated device
npx playwright open --device="iPhone 11" wikipedia.org

#take a screengrab
npx playwright screenshot --device="iPhone 11" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone.png

#open a page to write code in the browser developer console
npx playwright open gordon.byers.me

############################################################################################
# Lets get testing

# Install test package
npm install -D @playwright/test

#record activity to file, then run a test on it
#docs:https://playwright.dev/docs/test-cli/#reference

npx playwright codegen gordon.byers.me
npx playwright test --browser chromium -g blog --retries 1 --max-failures 5 --output test-results