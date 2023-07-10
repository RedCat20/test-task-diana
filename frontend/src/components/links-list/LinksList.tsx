import { FC, useState } from "react";
import { LinksApi } from "../../axios";
import { AxiosError } from "axios";
import { IFormLink, ILink } from "../../types/links";
import {
  Box,
  List,
  Divider,
  Button,
  Typography
} from '@mui/material';
import EditForm from "../edit-form/EditForm";
import LinkIcon from '@mui/icons-material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CustomListItem, CustomListItemText, CustomLinkTypography } from './LinksListStyled';

type Props = {
  links: ILink[];
  setLinks: (links: ILink[]) => void
}

const LinksList:FC<Props> = ({links, setLinks}) => {

  const [editedLink, setEditedLink] = useState<number>(0);
  const [editError, setEditError] = useState<string>('');

  const editLink = (link: IFormLink, data: ILink) => {
    const newLink = {
      ...link,
      id: data.id,
    }
    LinksApi.updateLink(link, data.id).then((updatedLink: ILink) => {
      setLinks([...links].map((item: ILink) => item.id === updatedLink.id ? updatedLink : item));
      setEditError('');

    }).catch((err: AxiosError | any) => {
      console.log('err: ', err);
      setEditError(err.response.data.message || err.message);
    });
    console.log('newLink: ', newLink);
  }

  const changeEditedLinkHandler = (id: number) => {
    if (id !== editedLink) {
      setEditedLink(id)
    } else {
      setEditedLink(0);
    }
  }

  const removeLinkHandler = (id: number) => {
    LinksApi.removeLink(id).then((link: ILink) => {
      setLinks([...links].filter((item: ILink) => item.id !== id));
    }).catch((err: AxiosError | any) => {
      console.log('err: ', err);
    });
  }

  return (
    <Box
      borderRadius={2}
      mx={'auto'}
      px={3}
      pt={2}
      pb={1}
      width={'100%'}
      maxWidth={'800px'}
      minWidth={'300px'}
      sx={{ borderColor: 'grey.500', border: '1px solid #E7EBF0' }}
    >

      <Typography variant="h5" component="h5" mb={2} fontWeight="bolder" color="gray">
        List of links
      </Typography>
      <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
        <nav aria-label="main mailbox folders">
          <List>
            {links?.length === 0 && <div>No links</div>}

            {links?.length > 0 && links.map((item: ILink) => (
              <div key={item.id}>

                <CustomListItem disablePadding sx={{marginBottom: '5px'}}>
                  <Button
                    sx={{marginRight: '5px'}}
                    size="small"
                    variant="text"
                    onClick={() => changeEditedLinkHandler(item.id)}
                  >
                    <EditIcon sx={{margin: 0, width: '32px', textAlign: 'center'}}/>
                  </Button>

                  <CustomListItemText onClick={() => window.location.href = item.url} primary={item.title} />

                  <CustomLinkTypography onClick={() => window.location.href = item.url}>
                    <LinkIcon />
                    <Box ml={2}>{item.url}</Box>
                  </CustomLinkTypography>

                  <Button
                    size="small"
                    variant="text"
                    onClick={() => removeLinkHandler(item.id)}
                  >
                    <DeleteIcon sx={{margin: 0, width: '32px', textAlign: 'center', color: 'gray'}}/>
                  </Button>
                </CustomListItem>

                {editedLink === item.id && <Box mb={2} py={3} px={1} bgcolor="#eff7fa">
                  <EditForm data={item} editCallback={editLink}/>
                  {editError &&
                    <Box mt={2} color="indianred" dangerouslySetInnerHTML={{__html: `${editError.toString().split(',', 1)}` }} />
                  }
                </Box>}

                {item.id !== links[links.length - 1].id && <Divider />}
              </div>
              ))}
          </List>
        </nav>
      </Box>

    </Box>
  )
}

export default LinksList;