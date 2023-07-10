import { FC, ReactNode } from "react";
import styles from './Template.module.scss';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {Container} from "@mui/material";

type Props = {
  children?: ReactNode
}

const Template: FC<Props> = ({children}) => {
  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.container}>
        <Container maxWidth="xl">
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  )
}

export default Template;