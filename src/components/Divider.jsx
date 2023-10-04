export const Divider = ({color}) => {

    return(
        color === "ekblue" ?
        <div className="h-12 bg-ekblue w-0.5" />
        :
        <div className="h-12 bg-eklightbrown w-0.5" />
    );
}