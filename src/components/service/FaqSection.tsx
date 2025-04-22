"use client";

import type React from "react";

import { useState } from "react";
import {
  Typography,
  Container,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import { faqs } from "@/components/service/helpers/uiData";

const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleAccordionChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 8, md: 12 } }}>
      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 700,
          mb: 6,
          position: "relative",
          display: "inline-block",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: {
            xs: "1.75rem", // similar to h4
            sm: "2rem",
            md: "2.5rem", // similar to h3
          },
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "60px",
            height: "4px",
            backgroundColor: "#3b82f6",
            borderRadius: "2px",
          },
        }}
      >
        Frequently Asked Questions
      </Typography>

      <Paper
        elevation={0}
        sx={{
          borderRadius: "16px",
          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0,0,0,0.05)",
          overflow: "hidden",
        }}
      >
        {faqs.map((faq, index) => (
          <Accordion
            key={faq.id}
            expanded={expanded === `panel${index + 1}`}
            onChange={handleAccordionChange(`panel${index + 1}`)}
            disableGutters
            elevation={0}
            sx={{
              borderBottom:
                index < faqs.length - 1 ? "1px solid rgba(0,0,0,0.08)" : "none",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: "#2563eb" }} />}
              sx={{
                backgroundColor:
                  expanded === `panel${index + 1}`
                    ? "rgba(239, 246, 255, 0.6)"
                    : "transparent",
                "&:hover": {
                  backgroundColor: "rgba(239, 246, 255, 0.4)",
                },
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{ backgroundColor: "rgba(239, 246, 255, 0.3)", p: 3 }}
            >
              <Typography variant="body1" sx={{ color: "#4b5563" }}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Container>
  );
};

export default FaqSection;
