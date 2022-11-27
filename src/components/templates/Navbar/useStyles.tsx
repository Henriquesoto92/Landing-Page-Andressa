import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "center",
    alingItems: "center",
  },
  links: {
    color: "#FFD700",
    [theme.fn.smallerThan("sm")]: {
      display: "none",
      color: "#FFD700",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.white,
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.fn.lighten(
        theme.fn.variant({ variant: "filled", color: theme.primaryColor })
          .background!,
        0.1
      ),
    },
  },

  linkLabel: {
    marginRight: 5,
  },
}));
