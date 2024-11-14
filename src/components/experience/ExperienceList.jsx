import React from "react";
import PropTypes from "prop-types";
import "./experience.css";
import { Tabs, Tab, Box, Typography } from "@mui/material";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const ExperienceList = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const experienceItems = {
    "Mayo Clinic": {
      jobTitle: "Data Engineer @",
      duration: "JUN 2023 - PRESENT",
      desc: [
        "Maintain clean and organized datasets throughout the research process to ensure high-quality data for analysis",
        "Generate descriptive summaries of data to provide initial insights and conduct survival analysis, multiple linear\
        regression, and logistic regression to answer research questions with tables and visualizations",
        "Collaborate on building data pipelines for machine learning processes and image recognition projects using\
        Python and R in GCP",
        "Foster clear communication channels with private investigators and project leads, ensuring project alignment\
        and timely delivery",
      ],
    },
    Spave: {
      jobTitle: "Data Analytics Engineer Intern @",
      duration: "JUN 2022 - MAY 2023",
      desc: [
        "Develop and automate statistical reporting of test data ",
        "Develop models to create peer comparison statistics",
        "Develop tools for automated analysis to reduce quality excursions",
        "Support machine learning and data science initiatives in anomaly detection",
      ],
    },
    "Watlow Electric Manufacturing Co.": {
      jobTitle: "Software Tester @",
      duration: "NOV 2021 - DEC 2022",
      desc: [
        "WSU is under contract with Watlow Electric Manufacturing Co (Winona,MN), which provides IoT solutions to its clients",
        "Create automated tests with C#, Composer, and Telerik Test Studio",
        "Validate software behavior and improve the efficiency of the development cycle",
        "Test type included manual and smoke tests",
      ],
    },
    "Caut!on Tech, LLC ": {
      jobTitle: "Co-Founder/Business Operations Lead @",
      duration: "JUL 2021 - FEB 2023",
      desc: [
        "Review technical aspects of the mobile app",
        "Oversee marketing, business, and finances of the company",
      ],
    },
    "Winona State University": {
      jobTitle: "Data Researcher and Analyst @",
      duration: "MAY 2021 - APR 2022",
      desc: [
        "Worked with a physics professor to research and analyze on going astrophysics project collaborating with other professors and post-graduate students in Arizona State University",
        "Analyzed 5-dimensional image data and used deep learning techniques to train a model utilizing Python libraries, such as NumPy, SciPy, MatplotLib, and ImageAI to detect Radio Frequency Interference in the images",
        "Implemented CI/CD through GitHub Actions for the GitHub repository and wrote PyTests to test existing codes that ran the Long Wavelength Array",
      ],
    },
    "Digi International ": {
      jobTitle: "Software Developer @",
      duration: "NOV 2020 - NOV 2021",
      desc: [
        "WSU was under contract with Digi International (Hopkins, MN) which provides IT, networking, and IoT solutions to its clients",
        "Wrote automated tests and scripts for testing web applications using Java, Jira, Azure Data Studio, Docker, Cassandra, JUnit, Git, Stash, BitBucket, and Regular Expressions",
        "Tested/examined software for bugs and resolve discovered issues",
        "Test types included manual and unit",
      ],
    },
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300,
      }}
      className="box"
    >
      <Tabs
        orientation={"vertical"}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className="tabs"
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `${i+1}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return <li key={i}>{descItem}</li>;
            })}
          </ul>
        </TabPanel>
      ))}
    </Box>
  );
};

export default ExperienceList;
