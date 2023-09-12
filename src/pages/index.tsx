import { useRouter } from "next/router";

import { Sponsors } from "@/components/Sponsors";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import { DefaultLogger } from "drizzle-orm";
import DefaultPreloader from "@/components/loader/DefaultPreloader";
import { Suspense, useEffect, useState } from "react";
import { NoSsr } from '@mui/base/NoSsr';
const Index = () => {
  const router = useRouter();
 

  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
     
   
    </Main>
  );
};

export default Index;
