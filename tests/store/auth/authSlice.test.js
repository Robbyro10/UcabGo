import { authSlice, onChecking, onLogin, onLogout, onUpdate } from "../../../src/store/auth/authSlice"
import { authenticatedState, initialState } from "../../__fixtures__/authStates";
import { testUserCredentials } from '../../__fixtures__/testUser'

describe('tests in authSlice', () => { 
   test('should return initial state ', () => { 

        expect(authSlice.getInitialState()).toEqual(initialState);

    });

    test('should login and update user', () => { 
        let state = authSlice.reducer(initialState, onLogin( testUserCredentials ));

        expect(state).toEqual({
            status: 'authenticated',
            user: testUserCredentials,
            errorMessage: undefined,
        });   

        const newUser = {  
            uid: 'abc',
            name: 'Juan Hedderich'
        }

        state = authSlice.reducer(authenticatedState, onUpdate(newUser));

        expect(state).toEqual({
            status: 'authenticated',
            user: newUser,
            errorMessage: undefined
        })
     });

    test('should logout', () => { 
        const state = authSlice.reducer(authenticatedState, onLogout());
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage: undefined,
        });
    });

    test('should logout with message', () => { 
        const errorMessage = 'Invalid credentials'
        const state = authSlice.reducer(authenticatedState, onLogout(errorMessage));
        expect(state).toEqual({
            status: 'not-authenticated',
            user: {},
            errorMessage,
        });
    });

    test('should check', () => { 
        const state = authSlice.reducer(authenticatedState, onChecking());
        expect(state).toEqual({
            status: "checking",
            user: {},
            errorMessage: undefined
        })
        
     })

 })