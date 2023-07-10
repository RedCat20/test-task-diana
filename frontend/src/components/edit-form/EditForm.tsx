import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { CustomBox, CustomButton } from './EditFormStyled'
import { TextField } from "@mui/material";
import { IFormLink, ILink } from "../../types/links";

type Props = {
  editCallback: (link: IFormLink, data: ILink) => void;
  data: ILink,
}

const EditForm:FC<Props> = ({editCallback, data}) => {

  const [formData, setFormData] = useState<IFormLink>({
    title: data.title || '',
    url: data.url || '',
  })

  const editLinkBtnHandler = (e: MouseEvent<HTMLButtonElement>) => {
    editCallback(formData, data)
  }

  const changeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, title: e.target.value})
  }

  const changeUrlHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, url: e.target.value})
  }

  return (
      <CustomBox>
          <TextField
            autoComplete='off'
            type='text'
            sx={{width: 'calc(40% - 60px)'}}
            size="small"
            value={formData.title || data.title}
            required
            id="outlined-required"
            label="Title"
            onChange={changeNameHandler}
          />

          <TextField
            autoComplete='off'
            type='text'
            sx={{width: 'calc(60% - 60px)'}}
            size="small"
            value={formData.url || data.url}
            required
            id="outlined-required"
            label="Address"
            onChange={changeUrlHandler}
          />

          <CustomButton
            onClick={editLinkBtnHandler}
            size={"medium"}
            variant="contained">
            Edit
          </CustomButton>
    </CustomBox>
  )
}

export default EditForm;