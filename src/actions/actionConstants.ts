/*
All defined actions in application
*/

export type ActionApi =
    "GET_CALENDARS"          // Fetch calendars from server
  | "GET_CALENDARS_SUCCESS"  // Successfully fetched calendar
  | "GET_CALENDARS_ERROR"    // Error in fetching
  | "GET_EVENTS"             // Fetch events for particular calendar
  | "GET_EVENTS_SUCCESS"     // Successfully fetched events
  | "GET_EVENTS_ERROR"       // Failure in fetching of events
  | "POST_CALENDAR"          // Create new calendar to server
  | "POST_CALENDAR_SUCCESS"
  | "POST_CALENDAR_ERROR"
  | "UPDATE_CALENDAR"
  | "UPDATE_CALENDAR_SUCCESS"
  | "UPDATE_CALENDAR_ERROR"
  | "POST_EVENT"
  | "POST_EVENT_SUCCESS"
  | "POST_EVENT_ERROR"
  | "UPDATE_EVENT"
  | "UPDATE_EVENT_SUCCESS"
  | "UPDATE_EVENT_ERROR"
  | "DELETE_EVENT"
  | "DELETE_EVENT_SUCCESS"
  | "DELETE_EVENT_ERROR";

export type ActionEntities =
    "CREATE_CALENDAR"
  | "CREATE_TEACH_EVENT"
  | "UPDATE_TEACH_EVENT"
  | "DELETE_TEACH_EVENT"
  | "CLEAR_ENTITIES";

export const ActionEntities: {[key: string]: ActionEntities} = {
  CREATE_CALENDAR: "CREATE_CALENDAR",
  CREATE_TEACH_EVENT: "CREATE_TEACH_EVENT",
  UPDATE_TEACH_EVENT: "UPDATE_TEACH_EVENT",
  DELETE_TEACH_EVENT: "DELETE_TEACH_EVENT",
  CLEAR_ENTITIES: "CLEAR_ENTITIES"
}

export type ActionReservedEvents =
    "SET_RESERVED_EVENT"
  | "REMOVE_RESERVED_EVENT"
  | "CLEAR_RESERVED_EVENTS";

export type ActionEventParticipants =
    "SET_PARTICIPANT"
  | "REMOVE_PARTICIPANT";

export const ActionEventParticipants: {[key: string]: ActionEventParticipants} = {
  SET_PARTICIPANT: "SET_PARTICIPANT",
  REMOVE_PARTICIPANT: "REMOVE_PARTICIPANT"
}

export type ActionFilter =
    "SET_CALENDAR_FILTER"
  | "SET_TIME_FILTER"
  | "REMOVE_CALENDAR_FILTER"
  | "REMOVE_TIME_FILTER"
  | "CLEAR_CALENDAR_FILTERS"
  | "CLEAR_TIME_FILTERS";

export const ActionFilter: {[key: string]: ActionFilter} = {
  SET_CALENDAR_FILTER: "SET_CALENDAR_FILTER",
  SET_TIME_FILTER: "SET_TIME_FILTER",
  REMOVE_CALENDAR_FILTER: "REMOVE_CALENDAR_FILTER",
  REMOVE_TIME_FILTER: "REMOVE_TIME_FILTER",
  CLEAR_TIME_FILTERS: "CLEAR_TIME_FILTERS",
  CLEAR_CALENDAR_FILTERS: "CLEAR_CALENDAR_FILTERS"
};

export type ActionResource =
    "CREATE_CALENDAR_RESOURCE"
  | "CLEAR_RESOURCES"
  | "REMOVE_CALENDAR_RESOURCE"

export const ActionResource: {[key: string]: ActionResource} = {
  CREATE_CALENDAR_RESOURCE: "CREATE_CALENDAR_RESOURCE",
  CLEAR_RESOURCES: "CLEAR_RESOURCES",
  REMOVE_CALENDAR_RESOURCE: "REMOVE_CALENDAR_RESOURCE"
}

export type ActionType =
    ActionApi
  | ActionEntities
  | ActionFilter
  | ActionEventParticipants
  | ActionResource;

export interface Action {
  type: ActionType;
}
