$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("jobsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Job Search",
  "description": "As a user I want to search the Job in cv Library",
  "id": "job-search",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"\u003cjobTitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"\u003cdistance\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"\u003csalaryMin\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"\u003csalaryMax\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"\u003csalaryType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"\u003cjobType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;",
  "rows": [
    {
      "cells": [
        "jobTitle",
        "location",
        "distance",
        "salaryMin",
        "salaryMax",
        "salaryType",
        "jobType",
        "result"
      ],
      "line": 19,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;1"
    },
    {
      "cells": [
        "Tester",
        "Harrow",
        "up to 5 miles",
        "30000",
        "500000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Harrow on the Hill"
      ],
      "line": 20,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2"
    },
    {
      "cells": [
        "Software Test Engineer",
        "West Midlands",
        "up to 15 miles",
        "35000",
        "75000",
        "Per annum",
        "Contract",
        "Contract Software Test Engineer jobs in West Midlands"
      ],
      "line": 21,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3"
    },
    {
      "cells": [
        "Software Engineer",
        "Stevenage Hertfordshire",
        "up to 10 miles",
        "30000",
        "45000",
        "Per annum",
        "Permanent",
        "Permanent Software Engineer jobs in Stevenage"
      ],
      "line": 22,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4"
    },
    {
      "cells": [
        "Software Engineer",
        "Glasgow City",
        "up to 10 miles",
        "30000",
        "60000",
        "Per annum",
        "Contract",
        "Contract Software Engineer jobs in Glasgow"
      ],
      "line": 23,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5"
    },
    {
      "cells": [
        "Software Test Engineer",
        "Derbyshire",
        "up to 25 miles",
        "4500",
        "6000",
        "Per month",
        "Permanent",
        "Permanent Software Engineer jobs in Derbyshire"
      ],
      "line": 24,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6"
    },
    {
      "cells": [
        "Tester",
        "Coventry",
        "up to 10 miles",
        "50000",
        "75000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Coventry"
      ],
      "line": 25,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7"
    },
    {
      "cells": [
        "Tester",
        "Central London",
        "up to 15 miles",
        "60000",
        "90000",
        "Per annum",
        "Permanent",
        "Permanent Tester jobs in Central London"
      ],
      "line": 26,
      "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16964713100,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Harrow\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 5 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"500000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Harrow on the Hill\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 349393300,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 1097118700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 1193806200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 596038300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Harrow",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 1027425700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 5 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 657591400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 408290500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 248502100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 169650800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 332733600,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 78692699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Harrow on the Hill",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 22702379600,
  "status": "passed"
});
formatter.after({
  "duration": 5456182300,
  "status": "passed"
});
formatter.before({
  "duration": 7352025700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"West Midlands\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"35000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Contract Software Test Engineer jobs in West Midlands\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 45301,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 221322500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 770524800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1060343399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "West Midlands",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 652410601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 570961099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "35000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 182871800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 196689499,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 101393800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 139324900,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 60754400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Test Engineer jobs in West Midlands",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 12227018201,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Contract Software Test Engineer jobs in West Midlands] but found [Contract Software Test Engineerwest jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobSearchSteps.java:76)\r\n\tat ✽.Then I should be able to verify the result message \"Contract Software Test Engineer jobs in West Midlands\"(jobsearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 3930079700,
  "status": "passed"
});
formatter.before({
  "duration": 7128431300,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Stevenage Hertfordshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"45000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 66400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 588334400,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 850292000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1668694300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Stevenage Hertfordshire",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 654873000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 305009799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 209899800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "45000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 248127100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 210295300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 268463200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 64928600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Stevenage",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 29836395500,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Software Engineer jobs in Stevenage] but found [Permanent Software Engineer jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobSearchSteps.java:76)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Software Engineer jobs in Stevenage\"(jobsearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1950254400,
  "status": "passed"
});
formatter.before({
  "duration": 9603420900,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Software Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Glasgow City\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"30000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"60000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Contract\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Contract Software Engineer jobs in Glasgow\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 51901,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 201152800,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 947174399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 220952599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Glasgow City",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 284944300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 1669355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 491616300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 377090600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 155914700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 181601399,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 68928600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Software Engineer jobs in Glasgow",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 18787792800,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Contract Software Engineer jobs in Glasgow] but found [Contract Software Engineer jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobSearchSteps.java:76)\r\n\tat ✽.Then I should be able to verify the result message \"Contract Software Engineer jobs in Glasgow\"(jobsearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1869270599,
  "status": "passed"
});
formatter.before({
  "duration": 6856588300,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Software Test Engineer\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Derbyshire\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 25 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"4500\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"6000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per month\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Permanent Software Engineer jobs in Derbyshire\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 64601,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 848473500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 3327779099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Software Test Engineer",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 3745866500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Derbyshire",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 764850699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 25 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 278053199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4500",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 152513799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 192089601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per month",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 264015300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 336200200,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 105863299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Software Engineer jobs in Derbyshire",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 12023975000,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Software Engineer jobs in Derbyshire] but found [Permanent Software Test Engineer jobs in Derbyshire]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobSearchSteps.java:76)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Software Engineer jobs in Derbyshire\"(jobsearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1877721000,
  "status": "passed"
});
formatter.before({
  "duration": 6969423900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Coventry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 10 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"50000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"75000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Coventry\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 62999,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 382445700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 699967600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 1053268100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coventry",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 675209500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 10 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 524855901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 201185000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "75000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 269917801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 103853200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 267049700,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 73967400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Coventry",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 9102899900,
  "error_message": "java.lang.AssertionError: The following asserts failed:\n\texpected [Permanent Tester jobs in Coventry] but found [Permanent Testercoventry jobs]\r\n\tat org.testng.asserts.SoftAssert.assertAll(SoftAssert.java:43)\r\n\tat uk.co.library.pages.ResultPage.verifyTheResults(ResultPage.java:34)\r\n\tat uk.co.library.cucumber.steps.JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(JobSearchSteps.java:76)\r\n\tat ✽.Then I should be able to verify the result message \"Permanent Tester jobs in Coventry\"(jobsearch.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1768504399,
  "status": "passed"
});
formatter.before({
  "duration": 11223423299,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "User should be able to verify Job Search Results using different dataset",
  "description": "",
  "id": "job-search;user-should-be-able-to-verify-job-search-results-using-different-dataset;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on search more options",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I accept cookies",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I enter job title \"Tester\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter location \"Central London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter distance \"up to 15 miles\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter salary minimum \"60000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter salary maximum \"90000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select salary type \"Per annum\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select job type \"Permanent\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on find jobs button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should be able to verify the result message \"Permanent Tester jobs in Central London\"",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "JobSearchSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 279301,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnSearchMoreOptions()"
});
formatter.result({
  "duration": 753349701,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iAcceptCookies()"
});
formatter.result({
  "duration": 1759537001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tester",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iEnterJobTitle(String)"
});
formatter.result({
  "duration": 2949458200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Central London",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterLocation(String)"
});
formatter.result({
  "duration": 225230700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "up to 15 miles",
      "offset": 18
    }
  ],
  "location": "JobSearchSteps.iEnterDistance(String)"
});
formatter.result({
  "duration": 68442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "60000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMinimum(String)"
});
formatter.result({
  "duration": 150914900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90000",
      "offset": 24
    }
  ],
  "location": "JobSearchSteps.iEnterSalaryMaximum(String)"
});
formatter.result({
  "duration": 214379100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Per annum",
      "offset": 22
    }
  ],
  "location": "JobSearchSteps.iSelectSalaryType(String)"
});
formatter.result({
  "duration": 84346100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent",
      "offset": 19
    }
  ],
  "location": "JobSearchSteps.iSelectJobType(String)"
});
formatter.result({
  "duration": 169337500,
  "status": "passed"
});
formatter.match({
  "location": "JobSearchSteps.iClickOnFindJobsButton()"
});
formatter.result({
  "duration": 41417901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Tester jobs in Central London",
      "offset": 47
    }
  ],
  "location": "JobSearchSteps.iShouldBeAbleToVerifyTheResultMessage(String)"
});
formatter.result({
  "duration": 18130394799,
  "status": "passed"
});
formatter.after({
  "duration": 1224760000,
  "status": "passed"
});
});