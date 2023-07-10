import { FC, useEffect, useState } from 'react';
import { Box } from "@mui/material";
import { IFormLink, ILink } from "./types/links";
import { LinksApi } from "./axios";
import { AxiosError } from "axios";
import Template from "./components/layout/Template/Template";
import LinksList from "./components/links-list/LinksList";
import AddForm from "./components/add-form/AddForm";

const App: FC = () => {

  const [links, setLinks] = useState<ILink[]>([]);
  const [addError, setAddError] = useState<string>('');

  useEffect(() => {
    LinksApi.getAllLinks().then((links: ILink[]) => {
      setLinks(links)
    })
  }, []);

  const addLink = (newLink: IFormLink) => {
    LinksApi.addLink(newLink).then((link: ILink) => {
      let newLinks = [...links];
      newLinks.push(link)
      setLinks(newLinks);
      setAddError('');
    }).catch((err: AxiosError | any) => {
      console.log('err: ', err);
      setAddError(err.response.data.message || err.message);
    });
  }

  return (
    <Template>
       <AddForm addCallback={addLink} />
        {addError &&
          <Box m={3}
               textAlign='center'
               color="indianred"
               dangerouslySetInnerHTML={{__html: `${addError.toString().split(',', 1)}` }}
          />
        }
        <LinksList links={links} setLinks={setLinks}/>
    </Template>
  );
}

export default App;
