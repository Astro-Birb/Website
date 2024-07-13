
import React, { useState, useEffect } from 'react';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { redirect} from 'next/navigation';

const GuildDashboard = () => {
    const router = useRouter();
    const { guildid } = router.query;
    router.push(`/dashboard/${guildid}/overview`);

}

    
export default GuildDashboard;
