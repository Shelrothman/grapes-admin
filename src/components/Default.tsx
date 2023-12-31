

type DefaultProps = {
    setUserAction: (userAction: string) => void;
}

export function DefaultComponent({ setUserAction }: DefaultProps) {



    return (
        <div>
            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                marginBottom: '1rem'
            }}>
                <button onClick={() => setUserAction('privacy')}>Grapes-App Privacy Policy</button><br />
                <br />
                {/* this is the only thing we really want them to do, bc they can just go directly to the updates without comign from the app with their id.. but i still think i technically could?... */}
                {/* // TODO [future]: allow them in here to do updates. */}
            </div>
        </div>
    )
}
