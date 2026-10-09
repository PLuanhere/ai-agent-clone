"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useState, type FormEvent } from "react"
import {
    Bot,
    BrainCircuit,
    Loader2,
    Rocket,
    Shuffle,
    Sparkles,
    type LucideIcon,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"

type AvatarOption = {
    name: string
    backgroundClassName: string
    icon?: LucideIcon
    image?: string
}

const avatarOptions: AvatarOption[] = [
    {
        name: "Orbit Bot",
        image: "/logo.png",
        backgroundClassName:
            "bg-gradient-to-br from-sky-100 via-white to-violet-100 dark:from-sky-950 dark:via-slate-950 dark:to-violet-950",
    },
    {
        name: "Neural Guide",
        icon: BrainCircuit,
        backgroundClassName:
            "bg-gradient-to-br from-violet-500 to-indigo-700 text-white",
    },
    {
        name: "Mission Bot",
        icon: Rocket,
        backgroundClassName:
            "bg-gradient-to-br from-cyan-400 to-blue-700 text-white",
    },
    {
        name: "Agent Bot",
        icon: Bot,
        backgroundClassName:
            "bg-gradient-to-br from-emerald-400 to-teal-700 text-white",
    },
]

function CreateAgentPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [avatarSeed, setAvatarSeed] = useState<string>(crypto.randomUUID());

    function shuffleAvatar() {
        const seed = crypto.randomUUID();
        setAvatarSeed(seed)
    }

    const onClickCreateAgent = async (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const avatarImage = `https://api.dicebear.com/10.x/line-face/svg?backgroundColor=ffd9b0,ffa8bf&backgroundColorFill=linear&backgroundColorAngle=135&seed=${avatarSeed}`
            const newAgentId = crypto.randomUUID();
            const result = await axios.post('/api/agent', {
                name: name,
                description: description,
                agentImage: avatarImage,
                agentId: newAgentId
            })

            console.log(result.data);
            router.push('/workspace/' + newAgentId);
            setIsLoading(false);
        }
        catch (e) {
            setIsLoading(false);
            console.log("Error creating agent " + e);

        }
    }

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
    }

    return (
        <div className="mx-auto flex w-full max-w-xl flex-1 flex-col py-0 md:py-2">
            <div className="mb-4">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Create New Agent
                </h1>
                <p className="mt-1.5 max-w-xl text-sm leading-5 text-muted-foreground">
                    Set up your AI agent by choosing an avatar, name, and description. You
                    can configure its tools and behavior later.
                </p>
            </div>

            <Card className="gap-0 py-0 shadow-sm">
                <CardContent className="px-0">
                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col items-center border-b px-6 py-4 md:px-8">
                            <img src={`https://api.dicebear.com/10.x/line-face/svg?backgroundColor=ffd9b0,ffa8bf&backgroundColorFill=linear&backgroundColorAngle=135&seed=${avatarSeed}`}
                                className="h-28 w-28" />

                            {/* <p className="mt-2.5 text-sm font-medium">{activeAvatar.name}</p> */}
                            <Button
                                type="button"
                                variant="outline"
                                className="mt-2.5"
                                onClick={shuffleAvatar}
                            >
                                <Shuffle data-icon="inline-start" />
                                Shuffle Image
                            </Button>
                        </div>

                        <div className="space-y-4 px-6 py-5 md:px-8">
                            <div className="space-y-2">
                                <Label htmlFor="agent-name">Agent Name</Label>
                                <Input
                                    id="agent-name"
                                    name="name"
                                    placeholder="e.g. Research Assistant"
                                    className="h-9"
                                    required
                                    autoFocus
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between gap-4">
                                    <Label htmlFor="agent-description">Agent Description</Label>
                                    <span className="text-xs text-muted-foreground">Optional</span>
                                </div>
                                <Textarea
                                    id="agent-description"
                                    name="description"
                                    placeholder="Describe what this agent will help you with..."
                                    className="min-h-20 resize-none"
                                    onChange={(event) => setDescription(event.target.value)}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col-reverse gap-2.5 border-t bg-muted/30 px-6 py-3.5 sm:flex-row sm:justify-end md:px-8">
                            <Button
                                type="button"
                                variant="outline"
                                className="sm:min-w-24"
                                onClick={() => router.push("/workspace")}
                            >
                                Cancel
                            </Button>
                            <Button
                                type="submit"
                                className="bg-slate-950 text-white hover:bg-slate-800 sm:min-w-32 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                                onClick={onClickCreateAgent}
                                disabled={isLoading}
                            >
                                {isLoading ? <Loader2 className="animate-spin" /> : null}
                                <Sparkles data-icon="inline-start" />
                                Create Agent
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default CreateAgentPage
