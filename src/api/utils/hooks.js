import { useEffect, useRef } from 'react';
import { getDataFromUrl } from './apiUtils';

export const useIsMountedRef = () => {
    const isMountedRef = useRef(null);
    useEffect(() => {
        isMountedRef.current = true;
        return () => (isMountedRef.current = false);
    });
    return isMountedRef;
};


export const useGetDataFromUrl = ({ url, field = null, setData, setLoading = null, setDataInStore }) => {
    const isMountedRef = useIsMountedRef();
    useEffect(() => {
        if (setLoading !== null) {
            setLoading(true);
        }
        isMountedRef.current = true;
        getDataFromUrl(url).then((r) => {
            if (isMountedRef.current) {
                console.log('r = ', r);
                const data = field ? r[field] : r;
                setData(data);
                setDataInStore(data);
                if (setLoading !== null) {
                    setLoading(false);
                }
            }
        });
    }, [url, field, isMountedRef, setData, setDataInStore, setLoading]);
};
