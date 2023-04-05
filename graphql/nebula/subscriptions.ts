/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
      id
      tenantID
      pubType
      pubID
      createdAt
      updatedAt
      refType
      refID
      eventType
      eventBody
      eventStatus
      ttl
    }
  }
`;
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
      id
      tenantID
      pubType
      pubID
      createdAt
      updatedAt
      refType
      refID
      eventType
      eventBody
      eventStatus
      ttl
    }
  }
`;
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
      id
      tenantID
      pubType
      pubID
      createdAt
      updatedAt
      refType
      refID
      eventType
      eventBody
      eventStatus
      ttl
    }
  }
`;
export const onCreateEventSubscriber = /* GraphQL */ `
  subscription OnCreateEventSubscriber(
    $filter: ModelSubscriptionEventSubscriberFilterInput
  ) {
    onCreateEventSubscriber(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
    }
  }
`;
export const onUpdateEventSubscriber = /* GraphQL */ `
  subscription OnUpdateEventSubscriber(
    $filter: ModelSubscriptionEventSubscriberFilterInput
  ) {
    onUpdateEventSubscriber(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
    }
  }
`;
export const onDeleteEventSubscriber = /* GraphQL */ `
  subscription OnDeleteEventSubscriber(
    $filter: ModelSubscriptionEventSubscriberFilterInput
  ) {
    onDeleteEventSubscriber(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
    }
  }
`;
export const onCreateEventNotification = /* GraphQL */ `
  subscription OnCreateEventNotification(
    $filter: ModelSubscriptionEventNotificationFilterInput
  ) {
    onCreateEventNotification(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
      notificationBody
      isRead
      userID
    }
  }
`;
export const onUpdateEventNotification = /* GraphQL */ `
  subscription OnUpdateEventNotification(
    $filter: ModelSubscriptionEventNotificationFilterInput
  ) {
    onUpdateEventNotification(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
      notificationBody
      isRead
      userID
    }
  }
`;
export const onDeleteEventNotification = /* GraphQL */ `
  subscription OnDeleteEventNotification(
    $filter: ModelSubscriptionEventNotificationFilterInput
  ) {
    onDeleteEventNotification(filter: $filter) {
      id
      tenantID
      createdAt
      updatedAt
      subType
      subID
      refType
      refID
      notificationBody
      isRead
      userID
    }
  }
`;
