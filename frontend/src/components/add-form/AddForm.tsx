import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { IFormLink } from "../../types/links";

type Props = {
  addCallback: (link: IFormLink) => void;
}

const AddForm:FC<Props> = ({addCallback}) => {

  const [formData, setFormData] = useState<IFormLink>({
    title: '',
    url: '',
  })

  const addLinkBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    addCallback(formData)
    setFormData({
      title: '',
      url: '',
    })
  }

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, title: e.target.value})
  }

  const changeUrlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, url: e.target.value})
  }

  return (
    <Box sx={{borderColor: 'grey.500', border: '1px solid #E7EBF0' }}
         mb={4}
         borderRadius={2}
         mx={'auto'} p={3}
         width={'100%'}
         maxWidth={'800px'}
         minWidth={'300px'}
         bgcolor="#F3F6F9"
    >
      <Typography
        variant="h5"
        component="h5"
        mb={4}
        fontWeight="bolder"
        color="gray"
      >
        Create a new link:
      </Typography>

      <Box mb={4}>
        <TextField
          size="medium"
          autoComplete="off"
          required
          id="outlined-required"
          label="Unique title"
          fullWidth
          type="text"
          value={formData.title}
          onChange={changeNameHandler}
          variant='standard'
        />
      </Box>

      <Box mb={4}>
        <TextField
          size="medium"
          autoComplete="off"
          required
          id="outlined-required"
          label="Url address"
          fullWidth
          value={formData.url}
          type="text"
          onChange={changeUrlHandler}
          variant='standard'
        />
      </Box>

      <Box
        sx={{display: 'flex', justifyContent: 'center'}}
      >
        <Button
          disabled={!formData.title || !formData.url}
          onClick={addLinkBtnHandler}
          size={"large"}
          sx={{minWidth: '150px'}}
          color="primary"
          variant="contained"
        >
          Add
        </Button>
      </Box>
    </Box>
  )
}

export default AddForm;