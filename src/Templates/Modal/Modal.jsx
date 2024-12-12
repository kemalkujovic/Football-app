import { useContext, useEffect, useState } from "react";
import {
  Dialog,
  Box,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  TextField,
  Stack,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { ProductContext } from "../../context/ProductTour";
import { useTheme } from "@mui/material/styles";

const modalWidths = {
  small: 360,
  medium: 540,
  large: 720,
};

export const ConfirmationModal = ({
  open,
  title,
  icon,
  headerColor,
  onClose,
  content,
  confirmationLabel,
  confirmationText,
  submitLabel,
  cancelLabel,
  onSubmit,
  isSubmitting,
  width = "medium",
  commentValue,
  setCommentValue,
  doNotShowId,
  appName,
}) => {
  const { showTourModal, handleDontShowAgain } = useContext(ProductContext);
  //   const { setDoNotShow, userSettings } = useUser();
  const theme = useTheme();
  console.log(theme.palette.primary.main);

  const headerColors = {
    error: theme.palette.error.light.concat("17"),
    info: theme.palette.info.light.concat("17"),
    primary: theme.palette.primary.light.concat("17"),
    secondary: theme.palette.secondary.light.concat("17"),
    success: theme.palette.success.light.concat("17"),
    warning: theme.palette.primary.main,
  };

  const [isFormValid, setIsFormValid] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  let isModalVisible = true;

  //   if (userSettings.preferences) {
  //     isModalVisible =
  //       !userSettings?.preferences[appName]?.doNotShow?.[doNotShowId];
  //   }

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleClose = () => {
    if (isCheckboxChecked) {
      handleDontShowAgain();
    }
    setIsFormValid(false);
    onClose();
  };

  const handleSubmit = () => {
    if (onSubmit) {
      if (isCheckboxChecked) {
        handleDontShowAgain();
      }
      onSubmit();
    }
  };

  useEffect(() => {
    if (open && onSubmit && !isModalVisible) {
      onSubmit();
    }
  }, [open]);

  return (
    <>
      {isModalVisible && (
        <Dialog
          open={open && isModalVisible}
          onClose={handleClose}
          PaperProps={{
            style: {
              flex: `0 0 ${modalWidths[width]}px`,
              boxShadow: "0px 10px 10px black",
              maxWidth: "90%",
            },
          }}
        >
          <Box
            height="56px"
            sx={{
              alignItems: "center",
              backgroundColor: headerColors[headerColor],
              display: "flex",
              justifyContent: "space-between",
              p: "12px",
            }}
          >
            <Box
              color={theme.palette.text.light}
              display="flex"
              alignItems="center"
              gap={1}
            >
              {/* <Box color={theme.palette.text.primary}>{icon}</Box> */}
              {icon}
              <Typography
                sx={{
                  fontSize: {
                    xs: "1rem",
                    sm: "1.25rem",
                    md: "1.5rem",
                  },
                }}
                variant="h5"
              >
                {title}
              </Typography>
            </Box>
            <IconButton
              sx={{
                color: theme.palette.text.light,
              }}
              onClick={handleClose}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <DialogContent>
            <Typography variant="subtitle1">{content}</Typography>
            {setCommentValue && (
              <TextField
                fullWidth
                label="Comment"
                variant="standard"
                name="comment"
                value={commentValue}
                onChange={(e) => setCommentValue(e.target.value)}
                multiline
                rows={2}
              />
            )}
            {confirmationText && (
              <Box marginY={1}>
                <Stack marginBottom={1} direction={"row"}>
                  <Typography variant="subtitle1">
                    {"Please confirm this action by typing\u00A0"}
                  </Typography>
                  <Typography
                    fontStyle="italic"
                    fontWeight="bold"
                    variant="subtitle1"
                  >
                    {confirmationText}
                  </Typography>
                </Stack>
                <TextField
                  fullWidth
                  //label={confirmationLabel}
                  name="confirmationText"
                  size="small"
                  value={commentValue}
                  onChange={(e) =>
                    setIsFormValid(e.target.value === confirmationText)
                  }
                />
              </Box>
            )}
            <FormControlLabel
              control={
                <Checkbox onChange={handleCheckboxChange} name={doNotShowId} />
              }
              label="Don’t show this again"
            />
          </DialogContent>
          <DialogActions>
            <Button color="inherit" onClick={handleClose}>
              <Typography minWidth="100px" variant="subtitle2">
                {cancelLabel}
              </Typography>
            </Button>
            <Button
              sx={{
                background: theme.palette.primary.main,
              }}
              disabled={
                isSubmitting || (!isFormValid && confirmationText !== undefined)
              }
              onClick={handleSubmit}
              type="submit"
              variant="contained"
            >
              <Typography minWidth="100px" variant="subtitle2">
                {submitLabel}
              </Typography>
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};
