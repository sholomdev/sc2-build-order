import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "../utils/api";

const Builds: NextPage = () => {
  const builds = api.builds.getBuilds.useQuery();
  return (
    <>
      <Head>
        <title>Builds</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center gap-8 bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <h1>Builds</h1>
        <Link href="/submit-build">Submit a new Build</Link>
        <Link href="/">Home</Link>
        <table>
          <thead>
            <tr>
              <td>ID</td>
              <td>Matchup</td>
              <td>Build</td>
            </tr>
          </thead>
          <tbody>
            {builds.data?.map((build) => {
              return (
                <tr key={build.id}>
                  <td>{build.id}</td>
                  <td>{build.matchUp}</td>
                  <td>{build.build}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </>
  );
};

export default Builds;