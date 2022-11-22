import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = 'https://llgrgyvmyfwiqoswfusg.supabase.co'
const PUBLIC_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxsZ3JneXZteWZ3aXFvc3dmdXNnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg5OTgxNzQsImV4cCI6MTk4NDU3NDE3NH0.2TX_9iOijFVGWrOLiUT_M--y1srgysbHXO26_G-OSQ0'
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export let changeTable = '';

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from('video')
                .select('*')
        },
        setVideos(list) {
            return supabase.from('video')
                .insert(list)
        },
        onChangeTalbe() {
            return supabase
                .channel('*')
        }
    }
}