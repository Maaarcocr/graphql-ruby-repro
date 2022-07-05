import React from "react"
import { ApolloLink, ApolloClient, InMemoryCache, ApolloProvider, gql, useSubscription } from '@apollo/client';
import { createConsumer } from '@rails/actioncable';
import ActionCableLink from 'graphql-ruby-client/subscriptions/ActionCableLink';
const cable = createConsumer()



const SUBSCRIPTION = gql`
  subscription Subscription {
    test {
      number
    }
  }
`;

const client = new ApolloClient({
  link: new ActionCableLink({cable}),
  cache: new InMemoryCache()
});

const Inside = () => {
  const { data, loading } = useSubscription(
    SUBSCRIPTION, {
      onSubscriptionData: (data) => {
        console.log(data)
      }
    }
  );
  return (
    <>
      <p>Hello Apollo</p>
      <h4>New comment: {data?.test?.number}</h4>
    </>
  )
}

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <Inside />
    </ApolloProvider>
  )
}